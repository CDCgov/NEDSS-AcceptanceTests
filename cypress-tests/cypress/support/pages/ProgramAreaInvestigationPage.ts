import BasePage from './BasePage';

export default class ProgramAreaInvestigationPage extends BasePage {
    constructor() {
        super('/MyProgramAreaInvestigations1.do?ContextAction=InvestigationID&publicHealthCaseUID=10011327&investigationFormCode=INV_FORM_GEN');
    }
}
