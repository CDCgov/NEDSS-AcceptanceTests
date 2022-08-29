import Patient from '../models/Patient';
import PatientSearchPage from '../pages/PatientSearchPage';

export default class PatientUtil {
    public static createPatientIfNotExists(patient: Patient): void {
        const detailedLogs = Cypress.env('detailedLogs');
        const searchResultsPage = PatientSearchPage.searchForPatient(patient);

        cy.document({ log: detailedLogs }).then((d) => {
            const searchResultCount = d.getElementsByClassName('odd').length + d.getElementsByClassName('even').length;
            if (searchResultCount === 0) {
                // user was not found, create it
                const addPatientPage = searchResultsPage.clickAddNew();
                addPatientPage.setComments('TEST user');
                addPatientPage.setLastName(patient.lastName);
                addPatientPage.setFirstName(patient.firstName);
                addPatientPage.setMiddleName(patient.middleName);
                addPatientPage.setSuffix(patient.suffix);
                addPatientPage.setDob(patient.dateOfBirth);
                addPatientPage.setCurrentSex(patient.currentSex);
                addPatientPage.setBirthSex(patient.birthSex);
                addPatientPage.setDeceased(patient.deceased);
                addPatientPage.setMaritalStatus(patient.maritalStatus);
                addPatientPage.setStreetAddress1(patient.streetAddress);
                addPatientPage.setCity(patient.city);
                addPatientPage.setState(patient.state);
                addPatientPage.setCounty(patient.county);
                addPatientPage.setCensusTract(patient.censusTract);
                addPatientPage.setCountry(patient.country);
                addPatientPage.setHomePhone(patient.homePhone);
                addPatientPage.setWorkPhone(patient.workPhone);
                addPatientPage.setWorkPhoneExtension(patient.workPhoneExtension);
                addPatientPage.setCellPhone(patient.cellPhone);
                addPatientPage.setEmail(patient.email);
                addPatientPage.setEthnicity(patient.ethnicitiy);
                addPatientPage.setRace(patient.race);
                addPatientPage.setIdentifications(patient.identifications);
                addPatientPage.clickSubmit();
            }
        });
    }
}
