import db from './db';
import config from './config';
import * as fs from 'fs';
import * as path from 'path';

const daoGenerate = () => {
    const connection = db.connect();
    db.executeSql(connection, `
    select * from information_schema.columns where table_name in (
        SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = '${config.TABLE_SCHEMA}'
    ) and TABLE_SCHEMA = '${config.TABLE_SCHEMA}'
`, (err, result) => {
        if (!err) {
            const files = getFiles(result);
            generatorInterface(result, files);
        }
    });
    db.close(connection);
};
daoGenerate();

function getFiles(columns) {
    let files = [{
        tableName: columns[0].TABLE_NAME,
        interfaceName: getInterfaceName(columns[0].TABLE_NAME),
        fileName: getFileName(columns[0].TABLE_NAME)
    }];
    columns.forEach(col => {
        if (!files.some(f => f.tableName === col.TABLE_NAME)) {
            files = [...files, {
                tableName: col.TABLE_NAME,
                interfaceName: getInterfaceName(col.TABLE_NAME),
                fileName: getFileName(col.TABLE_NAME)
            }];
        }
    });
    return files;
}
function generatorInterface(columns, files) {
    mkdir('/dao');
    const daoDir = path.dirname(__dirname) + '/dao';
    files.forEach(file => {
        let lines = `
/**
 * ${file.interfaceName}
 */
interface ${file.interfaceName} {

`;
        columns.forEach(col => {
            if (col.TABLE_NAME === file.tableName) {
                lines += `  ${col.COLUMN_NAME}?: ${getFieldType(col.DATA_TYPE)}; // ${col.COLUMN_COMMENT || col.COLUMN_NAME}\n`;
            }
        });
        lines += `
}
`;
        const filePath = daoDir + `/${file.fileName}.ts`;
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        fs.writeFile(filePath, lines, (err) => {
            if (err) {
                console.log('writeFile失败了：', err);
            }
        });
    });

}

function getFieldType(dataType) {
    let ret = 'string';
    switch (dataType) {
        case 'int':
            ret = 'number';
            break;
    }
    return ret;
}

function getInterfaceName(tableName: string) {
    return tableName.split('_').map(item => item.slice(0, 1).toUpperCase() + item.slice(1)).join('');
}

function getFileName(tableName: string) {
    return tableName.split('_').join('-');
}

/**
 * 创建文件夹： 传入 /dao 则创建 node-dao-gen/dao
 * @param _path
 * @param children
 */
function mkdir(_path, children = []) {
    const abPath = _path.startsWith('/') ? path.dirname(__dirname) + _path : _path;
    if (!fs.existsSync(abPath)) {
        const parentPath = path.resolve(abPath, '..');
        if (!fs.existsSync(parentPath)) {
            mkdir(parentPath, [abPath, ...children]);
        } else {
            fs.mkdirSync(abPath);
            children.forEach(item => {
                fs.mkdirSync(item);
            })
        }
    }
}