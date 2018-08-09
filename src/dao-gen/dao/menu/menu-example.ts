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
    public andPidIsNull(): Criteria {
        return this.addCriterion('pid is null');
    }
    public andPidIsNotNull(): Criteria {
        return this.addCriterion('pid is not null');
    }
    public andPidEqualTo(value: any): Criteria {
        return this.addCriterion('pid =', value, null, false);
    }
    public andPidNotEqualTo(value: any): Criteria {
        return this.addCriterion('pid <>', value, null, false);
    }
    public andPidGreaterThan(value: any): Criteria {
        return this.addCriterion('pid >', value, null, false);
    }
    public andPidGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('pid >=', value, null, false);
    }
    public andPidLessThan(value: any): Criteria {
        return this.addCriterion('pid <', value, null, false);
    }
    public andPidLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('pid <=', value, null, false);
    }
    public andPidLike(value: any): Criteria {
        return this.addCriterion('pid like', value, null, false);
    }
    public andPidNotLike(value: any): Criteria {
        return this.addCriterion('pid not like', value, null, false);
    }
    public andPidIn(values: any[]): Criteria {
        return this.addCriterion('pid in', values, null, false, false, false, true);
    }
    public andPidNotIn(values: any[]): Criteria {
        return this.addCriterion('pid not in', values, null, false, false, false, true);
    }
    public andPidBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('pid between', value1, value2, false, false, true);
    }
    public andPidNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('pid not between', value1, value2, false, false, true);
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
    public andDescriptionIsNull(): Criteria {
        return this.addCriterion('description is null');
    }
    public andDescriptionIsNotNull(): Criteria {
        return this.addCriterion('description is not null');
    }
    public andDescriptionEqualTo(value: any): Criteria {
        return this.addCriterion('description =', value, null, false);
    }
    public andDescriptionNotEqualTo(value: any): Criteria {
        return this.addCriterion('description <>', value, null, false);
    }
    public andDescriptionGreaterThan(value: any): Criteria {
        return this.addCriterion('description >', value, null, false);
    }
    public andDescriptionGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('description >=', value, null, false);
    }
    public andDescriptionLessThan(value: any): Criteria {
        return this.addCriterion('description <', value, null, false);
    }
    public andDescriptionLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('description <=', value, null, false);
    }
    public andDescriptionLike(value: any): Criteria {
        return this.addCriterion('description like', value, null, false);
    }
    public andDescriptionNotLike(value: any): Criteria {
        return this.addCriterion('description not like', value, null, false);
    }
    public andDescriptionIn(values: any[]): Criteria {
        return this.addCriterion('description in', values, null, false, false, false, true);
    }
    public andDescriptionNotIn(values: any[]): Criteria {
        return this.addCriterion('description not in', values, null, false, false, false, true);
    }
    public andDescriptionBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('description between', value1, value2, false, false, true);
    }
    public andDescriptionNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('description not between', value1, value2, false, false, true);
    }
    public andTnameIsNull(): Criteria {
        return this.addCriterion('tname is null');
    }
    public andTnameIsNotNull(): Criteria {
        return this.addCriterion('tname is not null');
    }
    public andTnameEqualTo(value: any): Criteria {
        return this.addCriterion('tname =', value, null, false);
    }
    public andTnameNotEqualTo(value: any): Criteria {
        return this.addCriterion('tname <>', value, null, false);
    }
    public andTnameGreaterThan(value: any): Criteria {
        return this.addCriterion('tname >', value, null, false);
    }
    public andTnameGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('tname >=', value, null, false);
    }
    public andTnameLessThan(value: any): Criteria {
        return this.addCriterion('tname <', value, null, false);
    }
    public andTnameLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('tname <=', value, null, false);
    }
    public andTnameLike(value: any): Criteria {
        return this.addCriterion('tname like', value, null, false);
    }
    public andTnameNotLike(value: any): Criteria {
        return this.addCriterion('tname not like', value, null, false);
    }
    public andTnameIn(values: any[]): Criteria {
        return this.addCriterion('tname in', values, null, false, false, false, true);
    }
    public andTnameNotIn(values: any[]): Criteria {
        return this.addCriterion('tname not in', values, null, false, false, false, true);
    }
    public andTnameBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('tname between', value1, value2, false, false, true);
    }
    public andTnameNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('tname not between', value1, value2, false, false, true);
    }
    public andUrlIsNull(): Criteria {
        return this.addCriterion('url is null');
    }
    public andUrlIsNotNull(): Criteria {
        return this.addCriterion('url is not null');
    }
    public andUrlEqualTo(value: any): Criteria {
        return this.addCriterion('url =', value, null, false);
    }
    public andUrlNotEqualTo(value: any): Criteria {
        return this.addCriterion('url <>', value, null, false);
    }
    public andUrlGreaterThan(value: any): Criteria {
        return this.addCriterion('url >', value, null, false);
    }
    public andUrlGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('url >=', value, null, false);
    }
    public andUrlLessThan(value: any): Criteria {
        return this.addCriterion('url <', value, null, false);
    }
    public andUrlLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('url <=', value, null, false);
    }
    public andUrlLike(value: any): Criteria {
        return this.addCriterion('url like', value, null, false);
    }
    public andUrlNotLike(value: any): Criteria {
        return this.addCriterion('url not like', value, null, false);
    }
    public andUrlIn(values: any[]): Criteria {
        return this.addCriterion('url in', values, null, false, false, false, true);
    }
    public andUrlNotIn(values: any[]): Criteria {
        return this.addCriterion('url not in', values, null, false, false, false, true);
    }
    public andUrlBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('url between', value1, value2, false, false, true);
    }
    public andUrlNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('url not between', value1, value2, false, false, true);
    }
    public andMethodIsNull(): Criteria {
        return this.addCriterion('method is null');
    }
    public andMethodIsNotNull(): Criteria {
        return this.addCriterion('method is not null');
    }
    public andMethodEqualTo(value: any): Criteria {
        return this.addCriterion('method =', value, null, false);
    }
    public andMethodNotEqualTo(value: any): Criteria {
        return this.addCriterion('method <>', value, null, false);
    }
    public andMethodGreaterThan(value: any): Criteria {
        return this.addCriterion('method >', value, null, false);
    }
    public andMethodGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('method >=', value, null, false);
    }
    public andMethodLessThan(value: any): Criteria {
        return this.addCriterion('method <', value, null, false);
    }
    public andMethodLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('method <=', value, null, false);
    }
    public andMethodLike(value: any): Criteria {
        return this.addCriterion('method like', value, null, false);
    }
    public andMethodNotLike(value: any): Criteria {
        return this.addCriterion('method not like', value, null, false);
    }
    public andMethodIn(values: any[]): Criteria {
        return this.addCriterion('method in', values, null, false, false, false, true);
    }
    public andMethodNotIn(values: any[]): Criteria {
        return this.addCriterion('method not in', values, null, false, false, false, true);
    }
    public andMethodBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('method between', value1, value2, false, false, true);
    }
    public andMethodNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('method not between', value1, value2, false, false, true);
    }
    public andParamsIsNull(): Criteria {
        return this.addCriterion('params is null');
    }
    public andParamsIsNotNull(): Criteria {
        return this.addCriterion('params is not null');
    }
    public andParamsEqualTo(value: any): Criteria {
        return this.addCriterion('params =', value, null, false);
    }
    public andParamsNotEqualTo(value: any): Criteria {
        return this.addCriterion('params <>', value, null, false);
    }
    public andParamsGreaterThan(value: any): Criteria {
        return this.addCriterion('params >', value, null, false);
    }
    public andParamsGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('params >=', value, null, false);
    }
    public andParamsLessThan(value: any): Criteria {
        return this.addCriterion('params <', value, null, false);
    }
    public andParamsLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('params <=', value, null, false);
    }
    public andParamsLike(value: any): Criteria {
        return this.addCriterion('params like', value, null, false);
    }
    public andParamsNotLike(value: any): Criteria {
        return this.addCriterion('params not like', value, null, false);
    }
    public andParamsIn(values: any[]): Criteria {
        return this.addCriterion('params in', values, null, false, false, false, true);
    }
    public andParamsNotIn(values: any[]): Criteria {
        return this.addCriterion('params not in', values, null, false, false, false, true);
    }
    public andParamsBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('params between', value1, value2, false, false, true);
    }
    public andParamsNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('params not between', value1, value2, false, false, true);
    }
    public andLiableIsNull(): Criteria {
        return this.addCriterion('liable is null');
    }
    public andLiableIsNotNull(): Criteria {
        return this.addCriterion('liable is not null');
    }
    public andLiableEqualTo(value: any): Criteria {
        return this.addCriterion('liable =', value, null, false);
    }
    public andLiableNotEqualTo(value: any): Criteria {
        return this.addCriterion('liable <>', value, null, false);
    }
    public andLiableGreaterThan(value: any): Criteria {
        return this.addCriterion('liable >', value, null, false);
    }
    public andLiableGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('liable >=', value, null, false);
    }
    public andLiableLessThan(value: any): Criteria {
        return this.addCriterion('liable <', value, null, false);
    }
    public andLiableLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('liable <=', value, null, false);
    }
    public andLiableLike(value: any): Criteria {
        return this.addCriterion('liable like', value, null, false);
    }
    public andLiableNotLike(value: any): Criteria {
        return this.addCriterion('liable not like', value, null, false);
    }
    public andLiableIn(values: any[]): Criteria {
        return this.addCriterion('liable in', values, null, false, false, false, true);
    }
    public andLiableNotIn(values: any[]): Criteria {
        return this.addCriterion('liable not in', values, null, false, false, false, true);
    }
    public andLiableBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('liable between', value1, value2, false, false, true);
    }
    public andLiableNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('liable not between', value1, value2, false, false, true);
    }
    public andResIsNull(): Criteria {
        return this.addCriterion('res is null');
    }
    public andResIsNotNull(): Criteria {
        return this.addCriterion('res is not null');
    }
    public andResEqualTo(value: any): Criteria {
        return this.addCriterion('res =', value, null, false);
    }
    public andResNotEqualTo(value: any): Criteria {
        return this.addCriterion('res <>', value, null, false);
    }
    public andResGreaterThan(value: any): Criteria {
        return this.addCriterion('res >', value, null, false);
    }
    public andResGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('res >=', value, null, false);
    }
    public andResLessThan(value: any): Criteria {
        return this.addCriterion('res <', value, null, false);
    }
    public andResLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('res <=', value, null, false);
    }
    public andResLike(value: any): Criteria {
        return this.addCriterion('res like', value, null, false);
    }
    public andResNotLike(value: any): Criteria {
        return this.addCriterion('res not like', value, null, false);
    }
    public andResIn(values: any[]): Criteria {
        return this.addCriterion('res in', values, null, false, false, false, true);
    }
    public andResNotIn(values: any[]): Criteria {
        return this.addCriterion('res not in', values, null, false, false, false, true);
    }
    public andResBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('res between', value1, value2, false, false, true);
    }
    public andResNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('res not between', value1, value2, false, false, true);
    }
    public andLevelIsNull(): Criteria {
        return this.addCriterion('level is null');
    }
    public andLevelIsNotNull(): Criteria {
        return this.addCriterion('level is not null');
    }
    public andLevelEqualTo(value: any): Criteria {
        return this.addCriterion('level =', value, null, false);
    }
    public andLevelNotEqualTo(value: any): Criteria {
        return this.addCriterion('level <>', value, null, false);
    }
    public andLevelGreaterThan(value: any): Criteria {
        return this.addCriterion('level >', value, null, false);
    }
    public andLevelGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('level >=', value, null, false);
    }
    public andLevelLessThan(value: any): Criteria {
        return this.addCriterion('level <', value, null, false);
    }
    public andLevelLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('level <=', value, null, false);
    }
    public andLevelLike(value: any): Criteria {
        return this.addCriterion('level like', value, null, false);
    }
    public andLevelNotLike(value: any): Criteria {
        return this.addCriterion('level not like', value, null, false);
    }
    public andLevelIn(values: any[]): Criteria {
        return this.addCriterion('level in', values, null, false, false, false, true);
    }
    public andLevelNotIn(values: any[]): Criteria {
        return this.addCriterion('level not in', values, null, false, false, false, true);
    }
    public andLevelBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('level between', value1, value2, false, false, true);
    }
    public andLevelNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('level not between', value1, value2, false, false, true);
    }
    public andSortIsNull(): Criteria {
        return this.addCriterion('sort is null');
    }
    public andSortIsNotNull(): Criteria {
        return this.addCriterion('sort is not null');
    }
    public andSortEqualTo(value: any): Criteria {
        return this.addCriterion('sort =', value, null, false);
    }
    public andSortNotEqualTo(value: any): Criteria {
        return this.addCriterion('sort <>', value, null, false);
    }
    public andSortGreaterThan(value: any): Criteria {
        return this.addCriterion('sort >', value, null, false);
    }
    public andSortGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('sort >=', value, null, false);
    }
    public andSortLessThan(value: any): Criteria {
        return this.addCriterion('sort <', value, null, false);
    }
    public andSortLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('sort <=', value, null, false);
    }
    public andSortLike(value: any): Criteria {
        return this.addCriterion('sort like', value, null, false);
    }
    public andSortNotLike(value: any): Criteria {
        return this.addCriterion('sort not like', value, null, false);
    }
    public andSortIn(values: any[]): Criteria {
        return this.addCriterion('sort in', values, null, false, false, false, true);
    }
    public andSortNotIn(values: any[]): Criteria {
        return this.addCriterion('sort not in', values, null, false, false, false, true);
    }
    public andSortBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('sort between', value1, value2, false, false, true);
    }
    public andSortNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('sort not between', value1, value2, false, false, true);
    }
    public andTypeIsNull(): Criteria {
        return this.addCriterion('type is null');
    }
    public andTypeIsNotNull(): Criteria {
        return this.addCriterion('type is not null');
    }
    public andTypeEqualTo(value: any): Criteria {
        return this.addCriterion('type =', value, null, false);
    }
    public andTypeNotEqualTo(value: any): Criteria {
        return this.addCriterion('type <>', value, null, false);
    }
    public andTypeGreaterThan(value: any): Criteria {
        return this.addCriterion('type >', value, null, false);
    }
    public andTypeGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('type >=', value, null, false);
    }
    public andTypeLessThan(value: any): Criteria {
        return this.addCriterion('type <', value, null, false);
    }
    public andTypeLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('type <=', value, null, false);
    }
    public andTypeLike(value: any): Criteria {
        return this.addCriterion('type like', value, null, false);
    }
    public andTypeNotLike(value: any): Criteria {
        return this.addCriterion('type not like', value, null, false);
    }
    public andTypeIn(values: any[]): Criteria {
        return this.addCriterion('type in', values, null, false, false, false, true);
    }
    public andTypeNotIn(values: any[]): Criteria {
        return this.addCriterion('type not in', values, null, false, false, false, true);
    }
    public andTypeBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('type between', value1, value2, false, false, true);
    }
    public andTypeNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('type not between', value1, value2, false, false, true);
    }
    public andCreatetimeIsNull(): Criteria {
        return this.addCriterion('createtime is null');
    }
    public andCreatetimeIsNotNull(): Criteria {
        return this.addCriterion('createtime is not null');
    }
    public andCreatetimeEqualTo(value: any): Criteria {
        return this.addCriterion('createtime =', value, null, false);
    }
    public andCreatetimeNotEqualTo(value: any): Criteria {
        return this.addCriterion('createtime <>', value, null, false);
    }
    public andCreatetimeGreaterThan(value: any): Criteria {
        return this.addCriterion('createtime >', value, null, false);
    }
    public andCreatetimeGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('createtime >=', value, null, false);
    }
    public andCreatetimeLessThan(value: any): Criteria {
        return this.addCriterion('createtime <', value, null, false);
    }
    public andCreatetimeLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('createtime <=', value, null, false);
    }
    public andCreatetimeLike(value: any): Criteria {
        return this.addCriterion('createtime like', value, null, false);
    }
    public andCreatetimeNotLike(value: any): Criteria {
        return this.addCriterion('createtime not like', value, null, false);
    }
    public andCreatetimeIn(values: any[]): Criteria {
        return this.addCriterion('createtime in', values, null, false, false, false, true);
    }
    public andCreatetimeNotIn(values: any[]): Criteria {
        return this.addCriterion('createtime not in', values, null, false, false, false, true);
    }
    public andCreatetimeBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('createtime between', value1, value2, false, false, true);
    }
    public andCreatetimeNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('createtime not between', value1, value2, false, false, true);
    }
    public andUpdatetimeIsNull(): Criteria {
        return this.addCriterion('updatetime is null');
    }
    public andUpdatetimeIsNotNull(): Criteria {
        return this.addCriterion('updatetime is not null');
    }
    public andUpdatetimeEqualTo(value: any): Criteria {
        return this.addCriterion('updatetime =', value, null, false);
    }
    public andUpdatetimeNotEqualTo(value: any): Criteria {
        return this.addCriterion('updatetime <>', value, null, false);
    }
    public andUpdatetimeGreaterThan(value: any): Criteria {
        return this.addCriterion('updatetime >', value, null, false);
    }
    public andUpdatetimeGreaterThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('updatetime >=', value, null, false);
    }
    public andUpdatetimeLessThan(value: any): Criteria {
        return this.addCriterion('updatetime <', value, null, false);
    }
    public andUpdatetimeLessThanOrEqualTo(value: any): Criteria {
        return this.addCriterion('updatetime <=', value, null, false);
    }
    public andUpdatetimeLike(value: any): Criteria {
        return this.addCriterion('updatetime like', value, null, false);
    }
    public andUpdatetimeNotLike(value: any): Criteria {
        return this.addCriterion('updatetime not like', value, null, false);
    }
    public andUpdatetimeIn(values: any[]): Criteria {
        return this.addCriterion('updatetime in', values, null, false, false, false, true);
    }
    public andUpdatetimeNotIn(values: any[]): Criteria {
        return this.addCriterion('updatetime not in', values, null, false, false, false, true);
    }
    public andUpdatetimeBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('updatetime between', value1, value2, false, false, true);
    }
    public andUpdatetimeNotBetween(value1: string, value2: string): Criteria {
        return this.addCriterion('updatetime not between', value1, value2, false, false, true);
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
export default class MenuExample {
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
        const getQuote = item => typeof item === 'number' ? '' : `'`;
        let fields = this.getFields();
        if (fields.length === 0) {
            const menu = new Menu();
            for (const p in menu) {
                if (menu.hasOwnProperty(p)) {
                    fields.push(p);
                }
            }
        }
        let value = onlyWhere ? ' where' : `select ${fields.join(',')} from t_monster_menu where`;
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
                        subValue += ` ${and}${c.condition} ${getQuote(c.value)}${c.value}${getQuote(c.value)}`
                    } else if (c.betweenValue) {
                        subValue += ` ${and}${c.condition} ${getQuote(c.value)}${c.value}${getQuote(c.value)} and ${getQuote(c.secondValue)}${c.secondValue}${getQuote(c.secondValue)}`
                    } else if (c.listValue) {
                        subValue += ` ${and}${c.condition} (${c.value.map(item => `${getQuote(item)}${item}${getQuote(item)}`).join(', ')})`
                    }
                });
                subValue += ' )' + (subI === oredCriteria.length - 1 ? '' : ' or');
                value += subValue;
            });
        }
        return value + (orderByClause ? (' order by ' + orderByClause) : '') +';';
    }
}
