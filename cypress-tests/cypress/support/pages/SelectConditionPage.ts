import BasePage from './BasePage';

enum Selector {
    CONDITION_INPUT = 'input[name=ccd_textbox]',
    REFERRAL_BASIS_INPUT = 'input[name=referralBasis_textbox]',
    SUBMIT_BUTTON = 'input[name=Submit]'
}

export default class SelectConditionPage extends BasePage {
    constructor() {
        super('ViewFile1.do?ContextAction=AddInvestigation');
    }

    public navigateTo(): void {
        throw new Error('Unable to navigate to page directly');
    }

    setCondition(condition: string): void {
        cy.get(Selector.CONDITION_INPUT).type(condition);
    }

    setReferralBasis(referralBasis: string): void {
        cy.get(Selector.REFERRAL_BASIS_INPUT).type(referralBasis);
    }

    clickSubmit(): Cypress.Chainable {
        return cy.get(Selector.SUBMIT_BUTTON).first().click();
    }
}
