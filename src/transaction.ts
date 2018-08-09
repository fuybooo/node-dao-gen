import * as mysql from 'mysql';
import config from './config';

/**
 *
 * 使用db： new Db(sql, cb);
 */
export default class Transaction {
    sql: string;
    cb: Function;
    needCommit: boolean;
    connection: any;
    data: any; // 查询结果
    constructor(sql: string,
                cb?: Function,
                needCommit: boolean = true,
                connection?: any) {
        this.sql = sql;
        this.cb = cb;
        this.needCommit = needCommit;
        if (connection) {
            // 直接使用connection去执行sql
            this.executeSql(connection);
        } else {
            // 开始事务
            this.getConnection();
        }
    }
    getConnection() {
        const pool = this.createPool();
        pool.getConnection((err, connection) => {
            if (err) {
                console.log('创建连接失败');
            } else {
                this.connection = connection;
                this.beginTransaction(connection);
            }
        });
    }
    beginTransaction(connection) {
        connection.beginTransaction(err => {
           if (err) {
               console.log('创建事务失败');
           } else {
               console.log(`
               
开始事务
               
               `);
               this.executeSql(connection);
           }
        });
    }
    createPool() {
        return mysql.createPool({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.TABLE_SCHEMA,
            connectionLimit: config.connectionLimit,
            waitForConnections: false
        });
    }
    executeSql(connection) {
        connection.query(this.sql, (err, data) => {
            if (!err) {
                // 执行成功，进行commit操作
                console.log(`
                
====
====
正在执行sql：

    ${this.sql}
    
====`);
                console.log(`====
sql返回结果：

    ${JSON.stringify(data)}
    
====
====

                `);
                if (this.needCommit) {
                    connection.commit(cErr => {
                        if (cErr) {
                            console.log('提交失败：', cErr);
                            connection.rollback(() => {
                                connection.release();
                                console.log('进行回滚操作');
                            });
                        } else {
                            console.log(`
               
结束事务
               
               `);
                            // connection.release();
                            this.data = data;
                            this.cb && this.cb(data);
                        }
                    });
                } else {
                    this.data = data;
                    this.cb && this.cb(data);
                }

            } else {
                console.log(`
                
====
====
执行失败，sql：

    ${this.sql}
    
====`);
                console.log(`====
err：

    ${err}
    
====
====

                `);
                connection.rollback(() => {
                    connection.release();
                    console.log('进行回滚操作');
                });
            }
            if (this.needCommit) {
                this.close(connection);
            }
        });
    }
    close(connection) {
        connection.end(err => err && console.error('close err'));
    }
}

export function insertSql(obj, tableName) {
    const getQuoteValue = (value) => {
        if (value === null || value === undefined) {
            return 'NULL';
        } else if (typeof value === 'number') {
            return value;
        } else {
            return `'${value}'`;
        }
    };
    const fields = Object.keys(obj);
    let values = fields.map(item => `${getQuoteValue(obj[item])}`);
    return `
    insert into ${tableName} (${fields.join(',')}) values (${values.join(',')});
    `;
}