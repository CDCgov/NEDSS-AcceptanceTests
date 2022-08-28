/// <reference types="cypress" />

import { After, Before, Then } from 'cypress-cucumber-preprocessor/steps';
import PatientSearchPage from '../pages/PatientSearchPage';
import PatientMother from '../utils/PatientMother';
import UserMother from '../utils/UserMother';
import UserUtil from '../utils/UserUtil';

Before(() => {
    UserUtil.login(UserMother.systemAdmin());
    UserUtil.createOrActivateUser(UserMother.clericalDataEntry());
    UserUtil.createOrActivateUser(UserMother.supervisor());
});

After(() => {
    // UserUtil.login(UserMother.systemAdmin());
    // UserUtil.deactivateUser(UserMother.clerical());
    // UserUtil.deactivateUser(UserMother.supervisor());
});

Then('I can view the patients summary', async () => {
    const patient = PatientMother.patient();
    const patientSearchPage = new PatientSearchPage();
    const resultsPage = patientSearchPage.searchForPatient(patient);
    resultsPage.clickPatientLink(0).then((patientFilePage) => {
        patientFilePage.navgiateTo();
    });
});
