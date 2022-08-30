import BasePage from '../utils/BasePage';
import AddPatientPage from './AddPatientPage';
import { PatientFilePage } from './PatientFilePage';

enum Selector {
    RESULTS_TABLE = 'table[id=searchResultsTable] tbody',
    ADD_NEW_BTN = 'input[name=Submit]'
}
export default class PatientSearchResultsPage extends BasePage {
    constructor() {
        super('/FindPatient2.do?ContextAction=Submit');
    }

    public navgiateTo(): void {
        throw new Error('Unable to navigate to search results directly');
    }

    clickAddNew(): AddPatientPage {
        this.clickFirst(Selector.ADD_NEW_BTN);
        return new AddPatientPage();
    }

    // click the link to the patient details at the provided index
    clickPatientLink(index: number): Cypress.Chainable<PatientFilePage> {
        return this.getElement(Selector.RESULTS_TABLE)
            .find('a', { log: this.detailedLogs })
            .then((links) => {
                // the displayed patient Id text does not match the uid of the patient, we pull the uid from the href
                // example href: http://localhost:7001/nbs/PatientSearchResults1.do?ContextAction=ViewFile&uid=10014284
                const href = (links[index] as HTMLAnchorElement).href;
                const uid = href.substring(href.indexOf('uid=') + 'uid='.length);
                return new PatientFilePage(uid);
            });
    }
}
