/// <reference types="cypress" />

import { CodedResult } from '../models/enums/CodedResult';
import { ResultedTest } from '../models/enums/ResultedTest';
import Organization from '../models/Organization';
import BasePage from './BasePage';

enum Selector {
    PATIENT_TAB = 'td[id=tabs0head0]',
    LAB_REPORT_TAB = 'td[id=tabs0head1]',
    QUICK_CODE_LOOKUP = 'input[id=NBS_LAB365Text]',
    QUICK_CODE_LOOKUP_BUTTON = 'input[id=NBS_LAB365CodeLookupButton]',
    COMMENTS_TEXTAREA = 'textarea[id=DEM196]',
    RESULTED_TEST = 'input[name=NBS_LAB220_textbox]',
    CODED_RESULT = 'input[name=NBS_LAB280_textbox]',
    ADD_RESULTED_TEST_BUTTON = 'tr[id=AddButtonToggleRESULTED_TEST_CONTAINER] input[type=button]',
    SUBMIT_BUTTON = 'input[name=Submit]'
}
export default class AddLabReportPage extends BasePage {
    activeTab: 'Patient' | 'LabReport' = 'Patient';

    constructor() {
        super('/MyTaskList1.do?ContextAction=AddLabDataEntry');
    }

    setActiveTab(activeTab: 'Patient' | 'LabReport'): Cypress.Chainable {
        this.activeTab = activeTab;
        return activeTab === 'Patient'
            ? this.clickFirst(Selector.PATIENT_TAB).get(Selector.COMMENTS_TEXTAREA).should('be.visible')
            : this.clickFirst(Selector.LAB_REPORT_TAB)
                  .get(Selector.QUICK_CODE_LOOKUP, { log: this.detailedLogs })
                  .should('be.visible');
    }

    setReportingFacility(reportingFacility: Organization) {
        this.setText(Selector.QUICK_CODE_LOOKUP, reportingFacility.quickCode);
        this.click(Selector.QUICK_CODE_LOOKUP_BUTTON);
    }

    setResultedTest(test: ResultedTest): void {
        this.setText(Selector.RESULTED_TEST, test);
    }

    setCodedResult(result: CodedResult): void {
        this.setText(Selector.CODED_RESULT, result);
    }

    clickAddResultedTest(): void {
        this.click(Selector.ADD_RESULTED_TEST_BUTTON);
    }

    clickSubmit(): void {
        this.clickFirst(Selector.SUBMIT_BUTTON);
    }
}
