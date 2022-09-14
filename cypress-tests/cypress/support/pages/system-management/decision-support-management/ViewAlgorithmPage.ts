import BasePage from '../../BasePage';

enum Selector {
    ALGORITHM_SUMMARY_TABLE = 'div[id=bd] table[class=style] tbody'
}
export default class ViewAlgorithmPage extends BasePage {
    constructor(uid: string) {
        super(`/DecisionSupport.do?algorithmUid=${uid}&method=viewLoad`);
    }

    getAlgorithmSummaryTable(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getElement(Selector.ALGORITHM_SUMMARY_TABLE);
    }
}
