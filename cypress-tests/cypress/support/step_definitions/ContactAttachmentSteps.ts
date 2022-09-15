import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import ContactPage from '../pages/ContactPage';

When('I upload a contact {string} with the following {string} and {string}', (filename: string, name: string, description: string) => {
    const contactPage = new ContactPage();
    contactPage.navigateTo();
    contactPage.clickSupplementalInfoTab();
    contactPage.clickAddAttachmentButton();
    contactPage.setName(name);
    contactPage.setDescription(description);
});

Then('It is stored with the contact and can be viewed', () => {
    console.log('contactattachment then');
});
