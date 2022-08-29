export class Race {
    // Value's seem to be from PHIN VADS: https://phinvads.cdc.gov/vads/ViewValueSet.action?id=67D34BBC-617F-DD11-B38D-00188B398520
    private constructor(private readonly key: string, public readonly value: any) {}

    static readonly AMERICAN_INDIAN_OR_ALASKA_NATIVE = new Race('American Indian or Alaska Native', '1002-5');
    static readonly ASIAN = new Race('Asian', '2028-9');
    static readonly BLACK_OR_AFRICAN_AMERICAN = new Race('Black or African American', '2054-5');
    static readonly MULTI_RACE = new Race('Multi-Race', 'M');
    static readonly NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER = new Race(
        'Native Hawaiian or Other Pacific Islander',
        '2076-8'
    );
    static readonly NOT_ASKED = new Race('not asked', 'NASK');
    static readonly OTHER = new Race('Other', '2131-1');
    static readonly REFUSED_TO_ANSWER = new Race('Refused to answer', 'PHC1175');
    static readonly UNKNOWN = new Race('Unknown', 'U');
    static readonly WHITE = new Race('White', '2106-3');

    toString() {
        return this.key;
    }
}
