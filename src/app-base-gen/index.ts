import * as fs from 'fs';
import config from '../config';
gen();
/**
 * app-base.<style-suffix>生成器
 */
function gen() {
    let lines = `/* 常用的基础样式 */
    `;
    const propertyArray = [
        {
            cls: 'w',
            property: 'width'
        },
        {
            cls: 'h',
            property: 'height'
        },
        {
            cls: 'pl',
            property: 'padding-left'
        },
        {
            cls: 'pr',
            property: 'padding-right'
        },
        {
            cls: 'pt',
            property: 'padding-top'
        },
        {
            cls: 'pb',
            property: 'padding-bottom'
        },
        {
            cls: 'ml',
            property: 'margin-left'
        },
        {
            cls: 'mr',
            property: 'margin-right'
        },
        {
            cls: 'mt',
            property: 'margin-top'
        },
        {
            cls: 'mb',
            property: 'margin-bottom'
        },
        {
            cls: 'f',
            property: 'font-size',
            maxNum: 100,
            notNeedPercentage: true
        },
        {
            cls: 'lh',
            property: 'line-height',
            maxNum: 100,
            notNeedPercentage: true
        },
        {
            cls: 'va',
            property: 'vertical-align',
            notNeedPercentage: true,
            getVa: true
        },
    ];
    for (let i = 0; i < propertyArray.length; i++) {
        lines += getNumberPropertyCode(propertyArray[i]);
    }
    lines += getOtherCode();
    if (fs.existsSync(config.baseLessPath)) {
        fs.unlinkSync(config.baseLessPath);
    }
    fs.writeFileSync(config.baseLessPath, lines, config.UTF8);
}

function getCommonNumberArray(num = 1000) {
    let numberArray = [];
    for (let i = 1; i <= num; i++) {
        numberArray.push(i);
    }
    return numberArray;
}
function getVerticalAlignNumberArray() {
    let numberArray = [];
    for (let i = -50; i <= 50; i++) {
        numberArray.push(i);
    }
    return numberArray;
}
function getCommonPercentageArray() {
    let percentageArray = [];
    for (let i = 0; i < 100; i++) {
        percentageArray.push(i);
    }
    return percentageArray;
}
function padStart(str, num = 7) {
    return (Array(num).fill(' ').join('') + str).slice(-num);
}
function padEnd(str, num = 10) {
    return (str + Array(num).fill(' ').join('')).slice(0, num);
}
function getNumberPropertyCode(pro) {
    const {cls, property, maxNum = 1000, notNeedPercentage = false, getVa = false} = pro;
    const numberArray = getVa ? getVerticalAlignNumberArray() : getCommonNumberArray(maxNum);
    const percentageArray = getCommonPercentageArray();
    let lines = `
/* ${property} start */
    `;
    if (!notNeedPercentage) {
    lines += percentageArray
        .map(n => `
${padEnd(`.${cls}${n ? '_' + n : ''}`)} { ${property}: ${padStart(n ? n : 100)}%; }`)
        .join('');
    lines += percentageArray
        .map(n => `
${padEnd(`.${cls}${n ? '_' + n : ''}i`)} { ${property}: ${padStart(n ? n : 100)}% !important; }`)
        .join('');
    }
    lines += numberArray
        .map(n => `
${padEnd(`.${cls}${n}`)} { ${property}: ${padStart(n)}${n ? 'px' : ''}; }`)
        .join('');
    lines += numberArray
        .map(n => `
${padEnd(`.${cls}${n}i`)} { ${property}: ${padStart(n)}${n ? 'px' : ''} !important; }`)
        .join('');
    lines += `

/* ${property} end */
    `;
    return lines;
}
function getOtherCode() {
    return `
/* 显示 */
.vv    { visibility: visible; }
.vh    { visibility: hidden; }
.vvi   { visibility: visible !important; }
/* 光标 */
.cp    { cursor: pointer; }
.cpi   { cursor: pointer !important; }
.cd    { cursor: default; }
.cdi   { cursor: default !important; }
/* 元素类型 */
.dn    { display: none; }
.dni   { display: none !important; }
.di    { display: inline; }
.dii   { display: inline !important; }
.db    { display: block; }
.dbi   { display: block !important; }
.dib   { display: inline-block; }
.dibi  { display: inline-block !important; }
/* 滚动条 */
.oh    { overflow: hidden; }
.ohi   { overflow: hidden !important; }
.oa    { overflow: auto; }
.oai   { overflow: auto !important; }
/* 定位 */
.pa    { position: absolute; }
.pai   { position: absolute !important; }
.pr    { position: relative; }
.pri   { position: relative !important; }
.pf    { position: fixed; }
.pfi   { position: fixed !important; }
/* 浮动 */
.fl    { float: left; }
.fli   { float: left !important; }
.fr    { float: right; }
.fri   { float: right !important; }
.cb    { clear: both; }
/* 排版 */
.tac   { text-align: center; }
.taci  { text-align: center !important; }
.tal   { text-align: left; }
.tali  { text-align: left !important; }
.tar   { text-align: right; }
.tari  { text-align: right !important; }
/* 特殊宽度 */
.w4rem { width: 4rem; }
    `;
}