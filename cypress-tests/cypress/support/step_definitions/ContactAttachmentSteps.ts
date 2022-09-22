import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PatientSearchPage from '../pages/PatientSearchPage';
import OpenInvestigationsQueuePage from '../pages/OpenInvestigationsQueuePage';
import ProgramAreaInvestigationPage from '../pages/ProgramAreaInvestigationPage';
import SelectConditionPage from '../pages/SelectConditionPage';
import PatientMother from '../utils/PatientMother';

When('I upload a contact {string} with the following {string} and {string}', (filename: string, name: string, description: string) => {
    const patient = PatientMother.patient();
    const resultsPage = PatientSearchPage.searchForPatient(patient);
    resultsPage.getPatientFilePage(0).then((patientFilePage) => {
        patientFilePage.navigateTo();
        patientFilePage.assertPatientSummaryExists(patient);
        patientFilePage.clickEventsTab();
        const conditionPage = patientFilePage.clickInvestigationsAddNewButton();
        conditionPage.setCondition('Chancroid');
        conditionPage.clickSubmit();  // use this to get referral basis input to show up
        conditionPage.setReferralBasis('S1 - Social Contact 1');
        conditionPage.clickSubmit();

        //TODO - Unable to acces child window to select condition.
        //TODO - Need to finish creation of investigation data
    });

    new OpenInvestigationsQueuePage().navigateTo();
    new ProgramAreaInvestigationPage().navigateTo();
    const contactPage = new ContactPage();
    contactPage.navigateTo();
    contactPage.clickSupplementalInfoTab();
    contactPage.clickAddAttachmentButton();
    contactPage.setFileAttachmentPath(filename);
    contactPage.setFileAttachmentName(name);
    contactPage.setFileAttachmentDescription(description);
    contactPage.clickFileAttachmentSubmit();
    contactPage.getAttachmentsTable();
});

Then('I can see the {string} and {string} in the list', (expectedName: string, expectedDescription: string) => {
    const contactPage = new ContactPage();
    const attachmentsTable = contactPage.getAttachmentsTable();
    attachmentsTable.should('contain', expectedName);
    attachmentsTable.should('contain', expectedDescription);
});
