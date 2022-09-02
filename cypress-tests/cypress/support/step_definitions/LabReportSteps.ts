import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { CodedResult } from '../models/enums/CodedResult';
import { ResultedTest } from '../models/enums/ResultedTest';
import AddLabReportPage from '../pages/AddLabReportPage';
import OrganizationMother from '../utils/OrganizationMother';

When(/I create a lab report/, () => {
    const addLabReportPage = new AddLabReportPage();
    addLabReportPage.navgiateTo();
    cy.wait(100);
    addLabReportPage.setActiveTab('LabReport').then(() => {
        addLabReportPage.setReportingFacility(OrganizationMother.emoryHospital());
        addLabReportPage.setResultedTest(ResultedTest.ACID_FAST_STAIN);
        addLabReportPage.setCodedResult(CodedResult.ABNORMAL);
        addLabReportPage.clickAddResultedTest();
        cy.wait(3000);
        addLabReportPage.clickSubmit();
    });
});

When(/a lab report is created/, () => {});

Then(/The lab report is created successfully/, () => {});

Then(/I can view the lab report in my queue/, () => {});
