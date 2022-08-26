export default abstract class BasePage {
    relativeUrl: string;
    static baseUrl = 'http://localhost:7001/nbs';
    detailedLogs = false;

    constructor(relativeUrl: string, detailedLogs: boolean = false) {
        this.relativeUrl = relativeUrl;
        this.detailedLogs = detailedLogs;
    }

    protected getElement(selector: string): Cypress.Chainable {
        return cy.get(selector, { log: this.detailedLogs });
    }

    protected typeValue(selector: string, value: string): void {
        this.getElement(selector).type(value, { log: this.detailedLogs });
    }

    protected selectValue(selector: string, value: string): void {
        this.getElement(selector).select(value, { log: this.detailedLogs, force: true });
    }

    protected setChecked(selector: string, checked: boolean): void {
        // fixes issue where calling check / uncheck always toggles state instead of setting it
        const element = this.getElement(selector);
        element.then((elem) => {
            if ((elem as HTMLInputElement)?.checked !== checked) {
                checked ? element.check({ log: this.detailedLogs }) : element.uncheck({ log: this.detailedLogs });
            }
        });
    }

    protected click(selector: string) {
        this.getElement(selector).click({ log: this.detailedLogs });
    }

    protected submit(selector: string) {
        this.getElement(selector).submit({ log: this.detailedLogs });
    }

    public navgiateTo(): void {
        cy.visit(BasePage.baseUrl + this.relativeUrl);
    }
}
