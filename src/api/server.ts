import * as express from 'express';
import * as bodyParser from "body-parser";
import Db from '../db';
import config from '../config';
import menus from './menus';
import util from '../util';
const port = 3333;
const receivePort = 2712;
const app = express();
app.use(bodyParser.json());
app.listen(port);
console.log(`sever started at localhost:${port}, receive port is ${receivePort}`);

// 允许跨域
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:' + receivePort);
    res.header('Access-Control-Allow-Header', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('X-Powered-By', '3.2.1');
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE');
        res.send(200);
    } else {
        next();
    }
});

app.post('/menus', (req, res) => {
    try {
        switch(req.body.method) {
            case 'get':
                menus.doGet(req, res);
                break;
            case 'post':
                // 先将它自己保存进数据库，再更新它的父节点
                menus.doPost(req, res);
                break;
            case 'put':
                break;
            case 'delete':
                break;
            default:
                util.getError(res, {property: 'method', value: req.body.method});
                break;
        }
    } catch (e) {
        util.jsonObj(res).error();
    }
});
app.post('/fields', (req, res) => {
    const table = util.getData(req, 'table');
    if (!table) {
        util.getError(res, {
            property: 'table',
            value: table,
        });
        return;
    }
    const sql = `select * from information_schema.columns where table_name ='${table.startsWith(config.TABLE_SUFFIX) ? table : (config.TABLE_SUFFIX + table)}' and TABLE_SCHEMA = '${config.TABLE_SCHEMA}'`;
    util.ret(sql, res);
});
app.post('/tables', (req, res) => {
    const sql = `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = '${config.TABLE_SCHEMA}'`;
    util.ret(sql, res);
});
