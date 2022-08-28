import { IdentificationType } from './enums/IdentificationType';
import { MaritalStatus } from './enums/MaritalStatus';
import { Race } from './enums/Race';
import { Suffix } from './enums/Suffix';

export default interface Patient {
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: Suffix;
    maritalStatus: MaritalStatus;
    dateOfBirth: Date;
    currentSex: 'Male' | 'Female' | 'Unknown';
    birthSex: 'Male' | 'Female' | 'Unknown';
    deceased: 'Yes' | 'No' | 'Unknown' | '';
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    county: string;
    country: string;
    censusTract: string;
    patientIds: string[];
    homePhone: string;
    workPhone: string;
    workPhoneExtension: string;
    cellPhone: string;
    email: string;
    ethnicitiy: 'Hispanic or Latino' | 'Not Hispanic or Latino' | '';
    race: Race;
    identifications: Identification[];
}

export interface Identification {
    identificationType: IdentificationType;
    idNumber: string;
    assigningAuthority: string;
}
