import Db from './db';
import execTrans from './db-helper';

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
function ret(sql, res, cb = (data) => res.json(getJson(data))) {
    new Db(sql, cb);
}
function getError(res, info: any = {msg: '错误'}) {
    res.json({
        code: 500,
        msg: info.msg || `${info.property}不正确，值为${info.value}`
    });
}

// =====================新版
function getData(reqParam, params?: string) {
    const req = JSON.parse(reqParam.body.data);
    if (params) {
        return req[params];
    }
    return req;
}
function retE(res) {
    jsonObj(res).error();
}
function retO(res, sql) {
    retAll(res, sql, 'success');
}
function retObj(res, sql) {
    retAll(res, sql, 'getObj');
}
function retList(res, sql) {
    retAll(res, sql, 'getList');
}
function retPage(res, totalSql, sql) {
    execTrans([totalSql, sql], (err, data) => {
        jsonObj(res, data[1], data[0][0].total).getPage();
    });
}
function retAll(res, sql, method) {
    execTrans(sql, (err, data) => {
        let returnData = {};
        if (method === 'getObj') {
            returnData = data[0][0];
        } else if (method === 'getList') {
            returnData = data[0];
        }
        jsonObj(res, returnData)[method]();
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
function json(data = {}, code = 200, msg = '') {
    return {code, msg, data};
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

// =====================新版
export default {
    ret,
    getData,
    getError,
    jsonObj,
    getPureObj,
    retObj,
    retList,
    retPage,
    retE,
    retO,
};