// Import commands.js using ES2015 syntax:
import './commands';
import PatientMother from './utils/PatientMother';
import PatientUtil from './utils/PatientUtil';
import UserMother from './utils/UserMother';
import UserUtil from './utils/UserUtil';

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    // NBS throws some javascript exceptions on certain pages. These will fail the tests, catching them here to prevent test failure
    cy.on('uncaught:exception', (error, runnable) => {
        return !(
            error.message.includes('Cannot read properties of undefined (reading') ||
            error.message.includes('Cannot read properties of null (reading')
        );
    });
});

// clean up test created data
after(() => {
    UserUtil.login(UserMother.systemAdmin()).then(() => {
        UserUtil.createOrActivateUser(UserMother.supervisor());
    });

    UserUtil.login(UserMother.supervisor()).then(() => {
        PatientUtil.deletePatientIfExists(PatientMother.patient());
        PatientUtil.deletePatientIfExists(PatientMother.duplicatedPatient());
    });

    UserUtil.login(UserMother.systemAdmin()).then(() => {
        UserUtil.deactivateUser(UserMother.clericalDataEntry());
        UserUtil.deactivateUser(UserMother.registryManager());
        UserUtil.deactivateUser(UserMother.supervisor());
    });
});
