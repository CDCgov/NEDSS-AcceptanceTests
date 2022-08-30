import { IdentificationType } from '../models/enums/IdentificationType';
import { MaritalStatus } from '../models/enums/MaritalStatus';
import { Race } from '../models/enums/Race';
import { Suffix } from '../models/enums/Suffix';
import Patient from '../models/Patient';

export default class PatientMother {
    public static patient(overrides?: Partial<Patient>): Patient {
        return {
            dateOfBirth: new Date('1970/01/01'),
            firstName: 'John',
            lastName: 'Doe',
            middleName: 'Bob',
            suffix: Suffix.NONE,
            maritalStatus: MaritalStatus.SINGLE_NEVER_MARRIED,
            deceased: 'No',
            county: 'Dekalb County',
            censusTract: '1234.22',
            workPhone: '111-222-3333',
            workPhoneExtension: '59',
            cellPhone: '123-456-7890',
            country: 'United States',
            currentSex: 'Male',
            birthSex: 'Male',
            streetAddress: '1600 Clifton Road',
            city: 'Atlanta',
            state: 'Georgia',
            zip: '30329',
            patientIds: [],
            homePhone: '123-456-7890',
            email: 'JohnDoe@email.com',
            ethnicitiy: 'Not Hispanic or Latino',
            race: Race.WHITE,
            identifications: [
                {
                    identificationType: IdentificationType.DRIVERS_LICENSE_NUMBER,
                    assigningAuthority: 'GA',
                    idNumber: 'ID:123456'
                }
            ],
            ...overrides
        };
    }

    public static duplicatedPatient(): Patient {
        return PatientMother.patient({ firstName: 'Johnathan', streetAddress: '1234 Another Road' });
    }
}
