import * as mysql from 'mysql';
import config from './config';

/**
 *
 * 使用db： new Db(sql, cb);
 */
export default class Db {
    sql: string;
    cb: Function;
    connection: any;
    data: any; // 查询结果
    constructor(sql: string, cb?: Function) {
        this.sql = sql;
        this.cb = cb;
        this.connection = this.connect();
        this.executeSql();
    }
    connect() {
        let connection = mysql.createConnection({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.TABLE_SCHEMA
        });
        connection.connect(err => err && console.error('connect err'));
        return connection;
    }
    executeSql() {
        this.connection.query(this.sql, (err, data) => {
            if (!err) {
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
                this.data = data;
                this.cb && this.cb(data);
                this.close();
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