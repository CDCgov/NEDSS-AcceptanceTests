import System from '../models/System';

export default class SystemMother {
    public static caseReportSystem(overrides?: Partial<System>): System {
        return {
            reportType: 'Case Report',
            displayName: 'TEST case report system',
            applicationName: 'TEST case report application name  \\&<>\'"',
            applicationOid: '1234',
            facilityName: 'TEST case report facility name',
            facilityOid: '4321',
            facilityDescription: 'TEST facility description \\&<>\'"',
            sendingSystem: 'Yes',
            receivingSystem: 'Yes',
            allowsTransfers: 'Yes',
            useSystemDerivedJurisdiction: 'Yes',
            administrativeComments: 'TEST case report comments',
            ...overrides
        };
    }

    public static labReportSystem(overrides?: Partial<System>): System {
        return {
            reportType: 'Laboratory Report',
            displayName: 'TEST lab report system',
            applicationName: 'TEST lab report application name  \\&<>\'"',
            applicationOid: '0987',
            facilityName: 'TEST lab report facility name',
            facilityOid: '7890',
            facilityDescription: 'TEST facility description \\&<>\'"',
            sendingSystem: 'Yes',
            administrativeComments: 'TEST case report comments',
            ...overrides
        };
    }
}
