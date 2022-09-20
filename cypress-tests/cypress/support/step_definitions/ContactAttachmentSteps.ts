import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import ContactPage from '../pages/ContactPage';
import OpenInvestigationsQueuePage from '../pages/OpenInvestigationsQueuePage';
import ProgramAreaInvestigationPage from '../pages/ProgramAreaInvestigationPage';

When('I upload a contact {string} with the following {string} and {string}', (filename: string, name: string, description: string) => {
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
