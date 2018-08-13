import * as mysql from 'mysql';
import * as async from 'async';
import config from './config';

export interface Transaction {
    sql: string;
    cb?: Function;
}

export default function execTrans(transactions: Transaction[] | Transaction | string | Array<Transaction | string>, complete?: Function) {
    const pool = mysql.createPool({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.TABLE_SCHEMA,
        connectionLimit: config.connectionLimit,
        waitForConnections: false
    });
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log('创建连接失败');
            return complete && complete(err);
        }
        connection.beginTransaction(function (bErr) {
            if (bErr) {
                console.log('事务开始失败');
                return complete && complete(bErr);
            }
            let transactionList = [];
            if (typeof transactions === 'string') {
                transactionList = [{sql: transactions}];
            } else if (!(transactions instanceof Array)) {
                transactionList = [transactions];
            } else {
                transactionList = transactions;
            }
            const results = [];
            const funcAry = transactionList.map((item: any, i: number) => {
                return (cb) => {
                    if (typeof item === 'string') {
                        item = {sql: item};
                    }
                    connection.query(item.sql, function (tErr, data) {
                        if (tErr) {
                            connection.rollback(function () {
                                console.log(`执行失败：${item.sql}`, tErr);
                            });
                            complete && complete(tErr);
                            throw tErr;
                        } else {
                            console.log(`
                    
                    
                    
            第${i + 1}条sql
                    
                    ${item.sql}
                    
            的执行结果：
                    
                    ${JSON.stringify(data)}
                    
                    
                    
                    `);
                            results.push(data);
                            item.cb && item.cb(data);
                            return cb(null, 'ok');
                        }
                    });
                };
            });

            async.series(funcAry, function (sErr) {
                complete && complete(sErr, results);
                if (sErr) {
                    connection.rollback(function (rErr) {
                        if (rErr) {
                            console.log('事务回滚失败: ', rErr);
                        }
                        connection.release();
                        return;
                    });
                } else {
                    connection.commit(function (cErr) {
                        if (cErr) {
                            console.log('事务提交失败: ', cErr);
                            connection.rollback(function (rErr) {
                                console.log('事务回滚失败: ', rErr);
                                connection.release();
                                return;
                            });
                        } else {
                            connection.release();
                            return;
                        }
                    });
                }
            });
        });
    });
}