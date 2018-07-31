import * as express from 'express';
import * as bodyParser from "body-parser";
import db from '../db';
const port = 3333;
const app = express();
app.use(bodyParser.json());
app.listen(port);
console.log('sever started at localhost:3333');

// 允许跨域
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
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
    let pid = req.body.pid;
    let sql = 'select * from t_monster_menu where pid = ' + (pid ? pid : 0);
    let connection = db.connect();
    db.executeSql(connection, sql, (err, results) => {
        if (!err) {
            res.json(results);
            db.close(connection);
        }
    });
});
