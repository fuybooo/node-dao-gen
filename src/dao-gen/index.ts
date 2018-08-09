import Db from '../db';
import config from '../config';
import * as fs from 'fs';
import * as path from 'path';

daoGenerate();
/**
 * 根据表自动生成实体类和拼接sql的类
 */
function daoGenerate() {
    new Db(`
    select * from information_schema.columns where table_name in (
        SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = '${config.TABLE_SCHEMA}'
    ) and TABLE_SCHEMA = '${config.TABLE_SCHEMA}'
`, (data) => {
        const files = getFiles(data);
        generator(data, files);
    });
}
function getName(tableName) {
    return tableName.replace(config.TABLE_SUFFIX, '');
}
function getFiles(columns) {
    let firstTableName = columns[0].TABLE_NAME;
    let dirName = getName(firstTableName);
    let files = [{
        tableName: firstTableName,
        mainName: getMainName(dirName),
        dirName,
        fileName: getFileName(dirName),
    }];
    columns.forEach(col => {
        if (!files.some(f => f.tableName === col.TABLE_NAME)) {
            let tableName = col.TABLE_NAME;
            let dirName = getName(tableName);
            files = [...files, {
                tableName: tableName,
                mainName: getMainName(dirName),
                dirName,
                fileName: getFileName(dirName)
            }];
        }
    });
    return files;
}
function generator(columns, files) {
    const daoDir = config.genDaoPath + '/dao';
    files.forEach(file => {
        // 生成class
        writeFile(daoDir, file, getMainLines(columns, file));
        // 生成sql拼接类
        writeFile(daoDir, file, getExampleLines(columns, file), true);
    });

}
function getMainLines(columns, file) {
    let lines = `
/**
 * ${file.mainName}
 */
export default class ${file.mainName} {

`;
    columns.forEach(col => {
        if (col.TABLE_NAME === file.tableName) {
            lines += `  public ${col.COLUMN_NAME}: ${getFieldType(col.DATA_TYPE)}; // ${col.COLUMN_COMMENT || col.COLUMN_NAME}\n`;
        }
    });
    lines += `
  // 构造函数
  constructor(${columns.map((col, i) => col.TABLE_NAME === file.tableName ? `${i ? '              ' : ''}${col.COLUMN_NAME}?: ${getFieldType(col.DATA_TYPE)}` : '').filter(item => !!item).join(',\n')}) {
    ${columns.map((col, i) => col.TABLE_NAME === file.tableName ? `${i ? '    ' : ''}this.${col.COLUMN_NAME} = ${col.COLUMN_NAME};` : '').filter(item => !!item).join('\n')}
  }
        `;
    lines += `
}
`;
    return lines;
}
function getExampleLines(columns, file) {
    let currentColumns = columns.filter(col => col.TABLE_NAME === file.tableName);
    return `import ${file.mainName} from './${file.dirName}';
class Criteria {
    public criteria: Array<Criterion> = [];
    public getCriteria(): Array<Criterion> {
        return this.criteria;
    }
    public addCriterion(
        condition: string,
        value?: any,
        secondValue?: any,
        noValue: boolean = true,
        singleValue: boolean = true,
        betweenValue: boolean = false,
        listValue: boolean = false,
        typeHandler?: string
    ): Criteria {
        this.criteria.push(new Criterion(
            condition,
            value,
            secondValue,
            noValue,
            singleValue,
            betweenValue,
            listValue,
            typeHandler
        ));
        return this;
    }${
        currentColumns.map(col => {
            let cn = col.COLUMN_NAME;
            let mcn = getMainName(col.COLUMN_NAME);
return `
    public and${mcn}IsNull(): Criteria {
        return this.addCriterion('${cn} is null');
    }
    public and${mcn}IsNotNull(): Criteria {
        return this.addCriterion('${cn} is not null');
    }
    public and${mcn}EqualTo(value: any): Criteria {
        return this.addCriterion('${cn} =', value, null, false);
    }
    public and${mcn}NotEqualTo(value: any): Criteria {
        return this.addCriterion('${cn} <>', value, null, false);
    }
    public and${mcn}GreaterThan(value: any): Criteria {
        return this.addCriterion('${cn} >', value, null, false);
    }
    public and${mcn}GreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('${cn} >=', value, null, false);
    }
    public and${mcn}LessThan(value: any): Criteria {
        return this.addCriterion('${cn} <', value, null, false);
    }
    public and${mcn}LessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('${cn} <=', value, null, false);
    }
    public and${mcn}Like(value: any): Criteria {
        return this.addCriterion('${cn} like', value, null, false);
    }
    public and${mcn}NotLike(value: any): Criteria {
        return this.addCriterion('${cn} not like', value, null, false);
    }
    public and${mcn}In(values: any[]): Criteria {
        return this.addCriterion('${cn} in', values, null, false, false, false, true);
    }
    public and${mcn}NotIn(values: any[]): Criteria {
        return this.addCriterion('${cn} not in', values, null, false, false, false, true);
    }
    public and${mcn}Between(value1: string, value2: string): Criteria {
        return this.addCriterion('${cn} between', value1, value2, false, false, true);
    }
    public and${mcn}NotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('${cn} not between', value1, value2, false, false, true);
    }`;
        }).join('')
        }
}
class Criterion {
    public condition: string;
    public value: any;
    public secondValue: any;
    public noValue: boolean;
    public singleValue: boolean;
    public betweenValue: boolean;
    public listValue: boolean;
    public typeHandler: string;
    constructor(
        condition: string,
        value: any,
        secondValue: any,
        noValue: boolean,
        singleValue: boolean,
        betweenValue: boolean,
        listValue: boolean,
        typeHandler: string
    ) {
        this.condition = condition;
        this.value = value;
        this.secondValue = secondValue;
        this.noValue = noValue;
        this.singleValue = singleValue;
        this.betweenValue = betweenValue;
        this.listValue = listValue;
        this.typeHandler = typeHandler;
    }
}
export default class ${file.mainName}Example {
    oredCriteria: Array<Criteria> = [];
    orderByClause = '';
    distinct: boolean;
    fields: string[] = [];
    public isValid(): boolean {
        return !!this.oredCriteria.length
    }
    public or(): Criteria {
        const criteria: Criteria = this.createCriteriaInternal();
        this.oredCriteria.push(criteria);
        return criteria;
    }
    public createCriteria(): Criteria {
        const criteria: Criteria = this.createCriteriaInternal();
        if (this.oredCriteria.length === 0) {
            this.oredCriteria.push(criteria);
        }
        return criteria;
    }
    protected createCriteriaInternal(): Criteria {
        return new Criteria();
    }
    setOrderByClause(orderByClause: string) {
        this.orderByClause = orderByClause;
    }
    getOrderByClause() {
        return this.orderByClause;
    }
    setFields(fields: string[]) {
        this.fields = fields;
    }
    getFields() {
        return this.fields;
    }
    setDistinct(distinct: boolean) {
        this.distinct = distinct;
    }
    getDistinct() {
        return this.distinct;
    }
    getOredCriteria() {
        return this.oredCriteria;
    }
    getValue(onlyWhere = false) {
        // 获取引号
        const getQuote = item => typeof item === 'number' ? '' : \`'\`;
        let fields = this.getFields();
        if (fields.length === 0) {
            const ${file.dirName} = new ${file.mainName}();
            for (const p in ${file.dirName}) {
                if (${file.dirName}.hasOwnProperty(p)) {
                    fields.push(p);
                }
            }
        }
        let value = onlyWhere ? ' where' : \`select ` + '${' + `fields.join(',')} from ${file.tableName} where\`;
        let orderByClause = '';
        if (this.isValid()) {
            const oredCriteria: Array<Criteria> = this.getOredCriteria();
            orderByClause = this.getOrderByClause();
            if (orderByClause) {
                if (!orderByClause.trim().endsWith(' desc') && !orderByClause.trim().endsWith(' asc')) {
                    orderByClause += ' asc';
                }
            }
            oredCriteria.forEach((item: Criteria, subI: number) => {
                let subValue = ' (';
                item.criteria.forEach((c: Criterion, i: number) => {
                    const and = i ? 'and ' : '';
                    if (c.noValue) {
                        subValue += \` ` + '${' + `and}` + '${' + `c.condition}\`;
                    } else if (c.singleValue) {
                        subValue += \` ` + '${' + `and}` + '${' + `c.condition} ` + '${' + `getQuote(c.value)}` + '${' + `c.value}` + '${' + `getQuote(c.value)}\`
                    } else if (c.betweenValue) {
                        subValue += \` ` + '${' + `and}` + '${' + `c.condition} ` + '${' + `getQuote(c.value)}` + '${' + `c.value}` + '${' + `getQuote(c.value)} and ` + '${' + `getQuote(c.secondValue)}` + '${' + `c.secondValue}` + '${' + `getQuote(c.secondValue)}\`
                    } else if (c.listValue) {
                        subValue += \` ` + '${' + `and}` + '${' + `c.condition} (` + '${' + `c.value.map(item => \`` + '${' + `getQuote(item)}` + '${' + `item}` + '${' + `getQuote(item)}\`).join(', ')})\`
                    }
                });
                subValue += ' )' + (subI === oredCriteria.length - 1 ? '' : ' or');
                value += subValue;
            });
        }
        return value + (orderByClause ? (' order by ' + orderByClause) : '') +';';
    }
}
`;
}

function writeFile(daoDir, file, lines, isExample = false) {
    // 先创建多层文件夹
    mkdir(daoDir + `/${file.dirName}`);
    const filePath = daoDir + `/${file.dirName}/${isExample ? file.fileName + '-example' : file.fileName}.ts`;
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
    fs.writeFile(filePath, lines, (err) => {
        if (err) {
            console.log('writeFile失败了：', err);
        }
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

function getMainName(tableName: string) {
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