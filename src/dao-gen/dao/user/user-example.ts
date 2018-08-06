import User from './user';
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
    public andNameIsNull(): Criteria {
        return this.addCriterion('name is null');
    }
    public andNameIsNotNull(): Criteria {
        return this.addCriterion('name is not null');
    }
    public andNameEqualTo(value: any): Criteria {
        return this.addCriterion('name =', value, null, false);
    }
    public andNameNotEqualTo(value: any): Criteria {
        return this.addCriterion('name <>', value, null, false);
    }
    public andNameGreaterThan(value: any): Criteria {
        return this.addCriterion('name >', value, null, false);
    }
    public andNameGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('name >=', value, null, false);
    }
    public andNameLessThan(value: any): Criteria {
        return this.addCriterion('name <', value, null, false);
    }
    public andNameLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('name <=', value, null, false);
    }
    public andNameLike(value: any): Criteria {
        return this.addCriterion('name like', value, null, false);
    }
    public andNameNotLike(value: any): Criteria {
        return this.addCriterion('name not like', value, null, false);
    }
    public andNameIn(values: any[]): Criteria {
        return this.addCriterion('name in', values, null, false, false, false, true);
    }
    public andNameNotIn(values: any[]): Criteria {
        return this.addCriterion('name not in', values, null, false, false, false, true);
    }
    public andNameBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('name between', value1, value2, false, false, true);
    }
    public andNameNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('name not between', value1, value2, false, false, true);
    }
    public andUsernameIsNull(): Criteria {
        return this.addCriterion('username is null');
    }
    public andUsernameIsNotNull(): Criteria {
        return this.addCriterion('username is not null');
    }
    public andUsernameEqualTo(value: any): Criteria {
        return this.addCriterion('username =', value, null, false);
    }
    public andUsernameNotEqualTo(value: any): Criteria {
        return this.addCriterion('username <>', value, null, false);
    }
    public andUsernameGreaterThan(value: any): Criteria {
        return this.addCriterion('username >', value, null, false);
    }
    public andUsernameGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('username >=', value, null, false);
    }
    public andUsernameLessThan(value: any): Criteria {
        return this.addCriterion('username <', value, null, false);
    }
    public andUsernameLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('username <=', value, null, false);
    }
    public andUsernameLike(value: any): Criteria {
        return this.addCriterion('username like', value, null, false);
    }
    public andUsernameNotLike(value: any): Criteria {
        return this.addCriterion('username not like', value, null, false);
    }
    public andUsernameIn(values: any[]): Criteria {
        return this.addCriterion('username in', values, null, false, false, false, true);
    }
    public andUsernameNotIn(values: any[]): Criteria {
        return this.addCriterion('username not in', values, null, false, false, false, true);
    }
    public andUsernameBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('username between', value1, value2, false, false, true);
    }
    public andUsernameNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('username not between', value1, value2, false, false, true);
    }
    public andEmailIsNull(): Criteria {
        return this.addCriterion('email is null');
    }
    public andEmailIsNotNull(): Criteria {
        return this.addCriterion('email is not null');
    }
    public andEmailEqualTo(value: any): Criteria {
        return this.addCriterion('email =', value, null, false);
    }
    public andEmailNotEqualTo(value: any): Criteria {
        return this.addCriterion('email <>', value, null, false);
    }
    public andEmailGreaterThan(value: any): Criteria {
        return this.addCriterion('email >', value, null, false);
    }
    public andEmailGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('email >=', value, null, false);
    }
    public andEmailLessThan(value: any): Criteria {
        return this.addCriterion('email <', value, null, false);
    }
    public andEmailLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('email <=', value, null, false);
    }
    public andEmailLike(value: any): Criteria {
        return this.addCriterion('email like', value, null, false);
    }
    public andEmailNotLike(value: any): Criteria {
        return this.addCriterion('email not like', value, null, false);
    }
    public andEmailIn(values: any[]): Criteria {
        return this.addCriterion('email in', values, null, false, false, false, true);
    }
    public andEmailNotIn(values: any[]): Criteria {
        return this.addCriterion('email not in', values, null, false, false, false, true);
    }
    public andEmailBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('email between', value1, value2, false, false, true);
    }
    public andEmailNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('email not between', value1, value2, false, false, true);
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
export default class UserExample {
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
            const user = new User();
            for (const p in user) {
                if (user.hasOwnProperty(p)) {
                    fields.push(p);
                }
            }
        }
        let value = `select ${fields.join(',')} from t_monster_user where`;
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
