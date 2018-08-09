import Db from './db';
import Transaction from './transaction';
import execTrans from './db-helper';

function ret(sql, res, cb = (data) => res.json(getJson(data))) {
    new Db(sql, cb);
}

/**
 * 单次事务
 * @param sql
 * @param res
 * @param {(data) => any} cb
 */
function retr(sql, res, cb = (data) => res.json(getJson(data))) {
    new Transaction(sql, cb, true);
}

function getData(reqParam, params?: string) {
    const req = JSON.parse(reqParam.body.data);
    if (params) {
        return req[params];
    }
    return req;
}

function getError(res, info: any = {msg: '错误'}) {
    res.json({
        code: 500,
        msg: info.msg || `${info.property}不正确，值为${info.value}`
    });
}

function jsonObj(res, dataOrList?, total?) {
    return {
        success: () => res.json(json()),
        error: () => res.json(json({}, 500, '执行失败')),
        getObj: () => res.json(json(dataOrList)),
        getPage: () => res.json(json({results: dataOrList, total})),
        getList: () => res.json(json({results: dataOrList}))
    };
}
function jsonPage(res, totalSql, sql) {
    execTrans([totalSql, sql], (err, data) => {
       jsonObj(res, data[1], data[0]).getPage();
    });
}

/**
 * 只需要返回成功或者失败
 * @param sql
 * @param res
 */
function re(sql, res) {
    execTrans(sql, (err) => {
        if (err) {
            jsonObj(res).error();
        } else {
            jsonObj(res).success();
        }
    });
}

function re2(sql: string, res, type = 1) {
    execTrans({
        sql, cb: (data) => {
            if (type === 1) {
                jsonObj(res, data).getObj();
            } else if (type === 2) {
                jsonObj(res, data).getList();
            }
        }
    }, (err) => {
        if (err) {
            jsonObj(res).error();
        }
    });
}

function json(data = {}, code = 200, msg = '') {
    return {code, msg, data};
}

function getJson(results?, msg = '') {
    return results ? {
        code: 200,
        data: {
            results
        },
        msg
    } : {
        code: 200,
        msg
    }
}

function getPureObj(params, clazz) {
    const obj = new clazz();
    for (const p in obj) {
        if (obj.hasOwnProperty(p)) {
            obj[p] = params[p];
        }
    }
    return obj;
}

export default {
    ret,
    getData,
    getError,
    getJson,
    jsonObj,
    getPureObj,
};