export class PermissionSet {
    private constructor(readonly key: string, readonly value: any) {}

    static readonly NEDSS_REMOTE_DATA_ENTRY_CLERK = new PermissionSet(
        'NEDSS Remote Data Entry Clerk',
        'NEDSS Remote Data Entry Clerk'
    );
    static readonly NEDSS_EPIDEMIOLOGIST = new PermissionSet('NEDSS Epidemiologist', 'NEDSS Epidemiologist');
    static readonly NEDSS_REGISTRY_MANAGER = new PermissionSet('NEDSS Registry Manager', 'NEDSS Registry Manager');
    static readonly NEDSS_SYSTEM_ADMIN = new PermissionSet('NEDSS System Admin', 'NEDSS System Admin');
    static readonly NEDSS_DISEASE_SUPERVISOR = new PermissionSet(
        'NEDSS Disease Supervisor',
        'NEDSS Disease Supervisor'
    );
    static readonly NEDSS_HEALTH_OFFICER = new PermissionSet('NEDSS Health Officer', 'NEDSS Health Officer');
    static readonly NEDSS_PROGRAM_COORDINATOR = new PermissionSet(
        'NEDSS Program Coordinator',
        'NEDSS Program Coordinator'
    );
    static readonly NEDSS_CASEWORKER = new PermissionSet('NEDSS Caseworker', 'NEDSS Caseworker');
    static readonly NEDSS_CLERICAL_DATA_ENTRY = new PermissionSet(
        'NEDSS Clerical Data Entry',
        'NEDSS Clerical Data Entry'
    );
    static readonly SUPERUSER = new PermissionSet('SUPERUSER', 'SUPERUSER');
    static readonly ELR_IMPORTER = new PermissionSet('ELR Importer', 'ELR Importer');
    static readonly DIS = new PermissionSet('DIS', 'DIS');
    static readonly SUPERVISOR = new PermissionSet('Supervisor', 'Supervisor');
    static readonly VIEWONLY = new PermissionSet('ViewOnly', 'ViewOnly');

    toString() {
        return this.key;
    }
}
