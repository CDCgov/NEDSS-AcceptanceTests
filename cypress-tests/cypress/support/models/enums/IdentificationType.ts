export class IdentificationType {
    // Captures the displayed key in the option as well as the underlying value
    private constructor(private readonly key: string, public readonly value: any) {}

    static readonly ACCOUNT_NUMBER = new IdentificationType('Account Number', 'AN');
    static readonly ALTERNATE_PERSON_NUMBER = new IdentificationType('Alternate person number', 'APT');
    static readonly CHIP_IDENTIFICATION_NUMBER = new IdentificationType('CHIP Identification number', 'CI');
    static readonly DRIVERS_LICENSE_NUMBER = new IdentificationType("Driver's license number", 'DL');
    static readonly IMMUNIZATION_REGISTRY_ID = new IdentificationType('Immunization Registry ID', 'IIS');
    static readonly MEDICAID_NUMBER = new IdentificationType('Medicaid number', 'MA');
    static readonly MEDICAL_RECORD_NUMBER = new IdentificationType('Medical record number', 'MR');
    static readonly MEDICARE_NUMBER = new IdentificationType('Medicare number', 'MC');
    static readonly MOTHERS_IDENTIFIER = new IdentificationType("Mother's identifier", 'MO');
    static readonly NATIONAL_UNIQUE_INDIVIDUAL_IDENTIFIER = new IdentificationType(
        'National unique individual identifier',
        'NI'
    );
    static readonly OTHER = new IdentificationType('Other', 'OTH');
    static readonly PARTNER_SERVICES_PATIENT_NUMBER = new IdentificationType('Partner Services Patient Number', 'PSID');
    static readonly PATIENT_EXTERNAL_IDENTIFIER = new IdentificationType('Patient External Identifier', 'PT');
    static readonly PATIENT_INTERNAL_IDENTIFIER = new IdentificationType('Patient Internal Identifier', 'PI');
    static readonly PERSON_NUMBER = new IdentificationType('Person number', 'PN');
    static readonly PRISON_IDENTIFICATION_NUMBER = new IdentificationType('Prison identification number', 'PIN');
    static readonly RYAN_WHITE_IDENTIFIER = new IdentificationType('Ryan White identifier', 'RW');
    static readonly SOCIAL_SECURITY = new IdentificationType('Social Security', 'SS');
    static readonly VISA_PASSPORT = new IdentificationType('VISA/Passport', 'VS');
    static readonly WIC_IDENTIFIER = new IdentificationType('WIC identifier', 'WC');

    toString() {
        return this.key;
    }
}
