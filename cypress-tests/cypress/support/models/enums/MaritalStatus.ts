export class MaritalStatus {
    private constructor(private readonly key: string, public readonly value: any) {}

    static readonly NONE = new MaritalStatus('', '');
    static readonly ANNULLED = new MaritalStatus('Annulled', 'A');
    static readonly COMMON_LAW = new MaritalStatus('Common Law', 'C');
    static readonly DIVORCED = new MaritalStatus('Divorced', 'D');
    static readonly DOMESTIC_PARTNER = new MaritalStatus('Domestic partner', 'T');
    static readonly INTERLOCUTORY = new MaritalStatus('Interlocutory', 'I');
    static readonly LEGALLY_SEPARATED = new MaritalStatus('Legally separated', 'L');
    static readonly LIVING_TOGETHER = new MaritalStatus('Living Together', 'G');
    static readonly MARRIED = new MaritalStatus('Married', 'M');
    static readonly OTHER = new MaritalStatus('Other', 'O');
    static readonly POLYGAMOUS = new MaritalStatus('Polygamous', 'P');
    static readonly REFUSED_TO_ANSWER = new MaritalStatus('Refused to answer', 'R');
    static readonly SEPARATED = new MaritalStatus('Separated', 'E');
    static readonly SINGLE_NEVER_MARRIED = new MaritalStatus('Single, never married', 'S');
    static readonly UNKNOWN = new MaritalStatus('Unknown', 'U');
    static readonly UNMARRIED = new MaritalStatus('Unmarried', 'B');
    static readonly UNREPORTED = new MaritalStatus('Unreported', 'F');
    static readonly WIDOWED = new MaritalStatus('Widowed', 'W');

    toString() {
        return this.key;
    }
}
