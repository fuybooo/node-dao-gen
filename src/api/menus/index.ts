import MenuExample from '../../dao-gen/dao/menu/menu-example';
import util from '../../util';
import {insert, tableName} from './menu-mapper';
import execTrans from '../../db-helper';
import Menu from '../../dao-gen/dao/menu/menu';

function doGet(req, res) {
    const pid = util.getData(req, 'pid');
    const example = new MenuExample();
    const criteria = example.createCriteria();
    criteria.andPidEqualTo(pid ? pid : 0);
    const types = util.getData(req, 'type');
    if (types) {
        criteria.andTypeIn(types);
    }
    util.ret(example.getValue(), res);
}
function doPost(req, res) {
    const params = util.getData(req);
    const menu = util.getPureObj(params, Menu);
    // 获取最大的sort
    execTrans([
        `select max(sort) m from ${tableName} where pid = ${menu.pid}`,
        `select level from ${tableName} where id = ${menu.pid}`
    ], (err, data) => {
        menu.sort = data[0][0].m + 1;
        menu.level = data[1][0].level + 1;

        const example = new MenuExample();
        const criteria = example.createCriteria();
        criteria.andIdEqualTo(params.pid).andTypeEqualTo(3);

        execTrans([
            insert(menu),
            `update ${tableName} set type = 1 ${example.getValue(true)}`
        ], (err) => {
            if (err) {
                util.jsonObj(res).error();
            } else {
                util.jsonObj(res).success();
            }
        });
    });
}

export default {
    doGet,
    doPost
};
