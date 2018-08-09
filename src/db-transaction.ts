import * as mysql from 'mysql';
import config from './config';

/**
 *
 * 使用事务
 *
 * 例子
 */
export default class Tr {
    sql: string;
    cb: Function;
    auto: boolean;
    connection: any;
    constructor(sql: string,
                cbOrAuto?: Function | boolean,
                auto: boolean = true) {
        this.sql = sql;
        if (typeof cbOrAuto === 'function') {
            this.cb = cbOrAuto;
            this.auto = auto;
        } else {
            this.cb = null;
            this.auto = cbOrAuto;
        }
        this.getConnection();
    }
    getConnection() {
        const pool = this.createPool();
        pool.getConnection((err, connection) => {
            if (err) {
                console.log('创建连接失败');
            } else {
                this.connection = connection;
                this.beginTransaction();
            }
        });
    }
    beginTransaction() {
        this.connection.beginTransaction(err => {
            if (err) {
                console.log('创建事务失败');
            } else {
                console.log(`
               
开始事务
               
               `);
                this.executeSql(this.sql, this.cb);
            }
        });
    }
    commit() {
        this.connection.commit(cErr => {
            if (cErr) {
                console.log('提交失败：', cErr);
                this.connection.rollback(() => {
                    this.connection.release();
                    console.log('进行回滚操作');
                });
            } else {
                console.log(`
               
结束事务
               
               `);
            }
            this.close();
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
    executeSql(sql, cb?) {
        this.connection.query(sql, (err, data) => {
            if (!err) {
                // 执行成功，进行commit操作
                console.log(`
                
====
====
正在执行sql：

    ${sql}
    
====`);
                console.log(`====
sql返回结果：

    ${JSON.stringify(data)}
    
====
====

                `);
                // 如果自动关闭连接，说明
                if (this.auto) {
                    this.commit();
                }
                cb && cb(data);
            } else {
                console.log(`
                
====
====
执行失败，sql：

    ${sql}
    
====`);
                console.log(`====
err：

    ${err}
    
====
====

                `);
                this.connection.rollback(() => {
                    this.connection.release();
                    console.log('进行回滚操作');
                });
            }
            if (this.auto) {
                this.close();
            }
        });
    }
    close() {
        this.connection.end(err => err && console.error('close err'));
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