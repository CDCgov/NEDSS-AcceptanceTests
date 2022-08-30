/// <reference types="cypress" />

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import MergePatientSearchPage from '../pages/MergePatientSearchPage';
import PatientSearchPage from '../pages/PatientSearchPage';
import PatientMother from '../utils/PatientMother';
import PatientUtil from '../utils/PatientUtil';
import UserMother from '../utils/UserMother';
import UserUtil from '../utils/UserUtil';

after(() => {
    // clean up patients
    UserUtil.login(UserMother.supervisor());
    PatientUtil.deletePatient(PatientMother.patient());

    // clean up users
    UserUtil.login(UserMother.systemAdmin());
    UserUtil.deactivateUser(UserMother.clericalDataEntry());
    UserUtil.deactivateUser(UserMother.supervisor());
});

Then(/I can view a patient's summary/, async () => {
    const patient = PatientMother.patient();
    const resultsPage = PatientSearchPage.searchForPatient(patient);
    resultsPage.clickPatientLink(0).then((patientFilePage) => {
        patientFilePage.navgiateTo();
        patientFilePage.assertPatientSummaryExists(patient);
    });
});
