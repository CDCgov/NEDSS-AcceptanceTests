export class Suffix {
    private constructor(private readonly key: string, public readonly value: any) {}

    static readonly NONE = new Suffix('', '');
    static readonly ESQUIRE = new Suffix('Esquire', 'ESQ');
    static readonly JUNIOR = new Suffix('Jr.', 'JR');
    static readonly SENIOR = new Suffix('Sr.', 'SR');
    static readonly THE_SECOND = new Suffix('II / The Second', 'II');
    static readonly THE_THIRD = new Suffix('III / The Third', 'III');
    static readonly THE_FOURTH = new Suffix('IV / The Fourth', 'IV');
    static readonly THE_FIFTH = new Suffix('V / The Fifth', 'V');

    toString() {
        return this.key;
    }
}
