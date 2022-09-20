import BasePage from './BasePage';

export default class ProgramAreaInvestigationPage extends BasePage {
    constructor() {
        super('/LoadNavbar.do?ContextAction=GlobalInvestigations&initLoad=true');
    }
}
