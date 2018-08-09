import {insertSql} from '../../db';
export const tableName = 't_monster_menu';
export function insert(obj) {
    return insertSql(obj, tableName);
}