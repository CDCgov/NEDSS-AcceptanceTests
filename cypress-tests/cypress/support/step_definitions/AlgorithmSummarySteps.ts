/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { SystemType } from '../models/enums/SystemType';
import WorkflowAlgorithm from '../models/WorkflowAlgorithm';
import AddAlgorithmPage from '../pages/system-management/decision-support-management/AddAlgorithmPage';
import ManageAlgorithmsPage from '../pages/system-management/decision-support-management/ManageAlgorithmsPage';
import WorkflowAlgorithmMother from '../utils/WorkflowAlgorithmMother';

enum EditedSystemType {
    EDITED_CASE_REPORT = 'edited Case Report',
    EDITED_LABORATORY_REPORT = 'edited Laboratory Report'
}
Given(/I create a (.*) algorithm/, (systemType: SystemType) => {
    const algorithm = getAlgorithmBySystemType(systemType);
    const manageAlgorithmsPage = new ManageAlgorithmsPage();
    manageAlgorithmsPage.navigateTo();
    manageAlgorithmsPage.getDisplayedAlgorithms().then((displayedAlgorithms) => {
        const existingAlgorithm = displayedAlgorithms.find((a) => a.algorithmName === algorithm.algorithmName);
        if (existingAlgorithm) {
            // algorithm with name exists, lets update it to match default values
            manageAlgorithmsPage.clickEditAlgorithm(algorithm.algorithmName).then((editAlgorithmPage) => {
                editAlgorithmPage.updateAlgorithm(algorithm);
            });
        } else {
            // algorithm doesn't exists, lets create it
            const addAlgorithmPage = new AddAlgorithmPage();
            addAlgorithmPage.navigateTo();
            addAlgorithmPage.createAlgorithm(algorithm);
        }
    });
});

When(/I edit the (.*) algorithm/, (systemType: SystemType) => {
    const editedType =
        systemType === SystemType.CASE_REPORT
            ? EditedSystemType.EDITED_CASE_REPORT
            : EditedSystemType.EDITED_LABORATORY_REPORT;
    const algorithm = getAlgorithmBySystemType(editedType);
    const manageAlgorithmsPage = new ManageAlgorithmsPage();
    manageAlgorithmsPage.navigateTo();
    manageAlgorithmsPage.clickEditAlgorithm(algorithm.algorithmName).then((editAlgorithmPage) => {
        editAlgorithmPage.updateAlgorithm(algorithm);
    });
});

Then(/I can view the (.*) algorithm summary/, (systemType: SystemType | EditedSystemType) => {
    const algorithm = getAlgorithmBySystemType(systemType);
    const manageAlgorithmsPage = new ManageAlgorithmsPage();
    manageAlgorithmsPage.navigateTo();
    manageAlgorithmsPage.clickViewAlgorithm(algorithm.algorithmName).then((viewAlgorithmPage) => {
        const summaryTable = viewAlgorithmPage.getAlgorithmSummaryTable();
        summaryTable.should('contain', algorithm.eventType);
        summaryTable.should('contain', algorithm.action);
        summaryTable.should('contain', algorithm.algorithmName);
    });
});

function getAlgorithmBySystemType(systemType: SystemType | EditedSystemType): WorkflowAlgorithm {
    switch (systemType) {
        case SystemType.CASE_REPORT:
            return WorkflowAlgorithmMother.caseReportAlgorithm();
        case SystemType.LABORATORY_REPORT:
            return WorkflowAlgorithmMother.labReportAlgorithm();
        case EditedSystemType.EDITED_CASE_REPORT:
            return WorkflowAlgorithmMother.caseReportAlgorithm({
                administrativeComments: 'edited comments for case report algorithm ()\\&<>\'"',
                investigationType: 'Varicella',
                conditions: ['Varicella'],
                onFailureToCreate: 'Retain Event Record',
                advancedCritera: [
                    {
                        question: '10. Diagnosis Date: (INV136)',
                        logic: 'Greater Than',
                        value: '01012020',
                        valueInputType: 'date'
                    }
                ],
                investigationDefaultValues: [
                    {
                        question: '53. General Comments: (INV167)',
                        value: 'Edited comment ()\\&<>\'"',
                        valueInputType: 'textarea',
                        behvaior: 'Overwrite Existing Values'
                    }
                ]
            });
        case EditedSystemType.EDITED_LABORATORY_REPORT:
            return WorkflowAlgorithmMother.labReportAlgorithm({
                administrativeComments: 'edited comments for lab report algorithm ()\\&<>\'"',
                investigationType: 'Tuberculosis',
                conditions: ['Tuberculosis'],
                advancedCritera: [
                    {
                        question: '10. Diagnosis Date: (INV136)',
                        logic: 'Greater Than',
                        value: '01012020',
                        valueInputType: 'date'
                    }
                ],
                investigationDefaultValues: [
                    {
                        question: '53. General Comments: (INV167)',
                        value: 'Edited comment ()\\&<>\'"',
                        valueInputType: 'textarea',
                        behvaior: 'Overwrite Existing Values'
                    }
                ]
            });
        default:
            throw new Error('Unsupported system type');
    }
}
