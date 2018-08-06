import Menu from './menu';
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
    }
    public andIdIsNull(): Criteria {
        return this.addCriterion('id is null');
    }
    public andIdIsNotNull(): Criteria {
        return this.addCriterion('id is not null');
    }
    public andIdEqualTo(value: any): Criteria {
        return this.addCriterion('id =', value, null, false);
    }
    public andIdNotEqualTo(value: any): Criteria {
        return this.addCriterion('id <>', value, null, false);
    }
    public andIdGreaterThan(value: any): Criteria {
        return this.addCriterion('id >', value, null, false);
    }
    public andIdGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('id >=', value, null, false);
    }
    public andIdLessThan(value: any): Criteria {
        return this.addCriterion('id <', value, null, false);
    }
    public andIdLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('id <=', value, null, false);
    }
    public andIdLike(value: any): Criteria {
        return this.addCriterion('id like', value, null, false);
    }
    public andIdNotLike(value: any): Criteria {
        return this.addCriterion('id not like', value, null, false);
    }
    public andIdIn(values: any[]): Criteria {
        return this.addCriterion('id in', values, null, false, false, false, true);
    }
    public andIdNotIn(values: any[]): Criteria {
        return this.addCriterion('id not in', values, null, false, false, false, true);
    }
    public andIdBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('id between', value1, value2, false, false, true);
    }
    public andIdNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('id not between', value1, value2, false, false, true);
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
class MenuExample {
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
    getValue() {
        let fields = this.getFields();
        if (fields.length === 0) {
            const menu = new Menu();
            for (const p in menu) {
                if (menu.hasOwnProperty(p)) {
                    fields.push(p);
                }
            }
        }
        let value = `select ${fields.join(',')} from t_monster_menu where`;
        let orderByClause = '';
        if (this.isValid()) {
            const oredCriteria: Array<Criteria> = this.getOredCriteria();
            orderByClause = this.getOrderByClause();
            if (orderByClause) {
                // 如果条件不是‘ desc’ 结尾，且不是‘ asc’ 结尾，则加上默认的asc结尾
                if (!orderByClause.trim().endsWith(' desc') && !orderByClause.trim().endsWith(' asc')) {
                    orderByClause += ' asc';
                }
            }
            // console.log(JSON.stringify(oredCriteria), orderByClause);
            oredCriteria.forEach((item: Criteria, subI: number) => {
                let subValue = ' (';
                item.criteria.forEach((c: Criterion, i: number) => {
                    const and = i ? 'and ' : '';
                    if (c.noValue) {
                        subValue += ` ${and}${c.condition}`;
                    } else if (c.singleValue) {
                        subValue += ` ${and}${c.condition} '${c.value}'`
                    } else if (c.betweenValue) {
                        subValue += ` ${and}${c.condition} ${c.value} and ${c.secondValue}`
                    } else if (c.listValue) {
                        subValue += ` ${and}${c.condition} (${c.value.map(item => `'${item}'`).join(', ')})`
                    }
                });
                subValue += ' )' + (subI === oredCriteria.length - 1 ? '' : ' or');
                value += subValue;
            });
        }
        return value + ' order by ' + orderByClause +';';
    }
}
function test() {
    const example = new MenuExample();
    const criteria = example.createCriteria();
    criteria.andIdEqualTo('abc').andIdIsNull().andIdBetween('b1', 'b2')
        .andIdGreaterThan('gt1').andIdGreaterThanOrEqualTo('gte1').andIdIn(['a1,a2,a3'])
        .andIdLessThan('lt1').andIdLessThanOrEqualTo('lt2');
    example.setOrderByClause('id desc');
    example.or().andIdLessThanOrEqualTo('abcor').andIdLessThan('lt2');
    example.or().andIdLessThanOrEqualTo('abcor2').andIdLessThan('lt3');
    console.log(example.getValue());
}
test();