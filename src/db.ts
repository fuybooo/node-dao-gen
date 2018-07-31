import * as mysql from 'mysql';
import config from './config';

let db: any = {};
db.executeSql = (connection, sql, cb) => connection.query(sql, cb);
db.connect = () => {
    let connection = mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.TABLE_SCHEMA
    });
    connection.connect(err => {
        if (err) {
            console.log('connect err');
        } else {
            console.log('connect success');
        }
    });
    return connection;
};
db.close = (connection => connection.end((err) => {
    if (err) {
        console.log('connect close err');
    } else {
        console.log('connect close success');
    }
}));
export default db;