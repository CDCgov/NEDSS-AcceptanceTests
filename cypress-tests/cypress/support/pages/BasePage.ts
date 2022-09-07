/// <reference types="cypress" />

export default abstract class BasePage {
    relativeUrl: string;
    detailedLogs = Cypress.env('detailedLogs');

    constructor(relativeUrl: string) {
        this.relativeUrl = relativeUrl;
    }

    protected getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selector, { log: this.detailedLogs });
    }

    protected setText(selector: string, value: string): void {
        if (value.trim().length === 0) {
            this.getElement(selector).clear({ log: this.detailedLogs });
        } else {
            this.getElement(selector).clear({ log: this.detailedLogs }).type(value, { log: this.detailedLogs });
        }
    }

    protected setChecked(selector: string, checked: boolean): void {
        this.getElement(selector).then((results) => {
            const inputElement = results[0] as HTMLInputElement;
            if (inputElement.checked !== checked) {
                inputElement.click();
            }
        });
    }

    protected select(selector: string, selection: string[], options?: Partial<Cypress.SelectOptions>): void {
        this.getElement(selector).select(selection, { log: this.detailedLogs, ...options });
    }

    protected click(selector: string) {
        this.getElement(selector).click({ log: this.detailedLogs });
    }

    protected clickFirst(selector: string): Cypress.Chainable {
        return this.getElement(selector).first({ log: this.detailedLogs }).click({ log: this.detailedLogs });
    }

    protected submit(selector: string) {
        this.getElement(selector).submit({ log: this.detailedLogs });
    }

    protected clear(selector: string) {
        this.getElement(selector).clear({ log: this.detailedLogs });
    }

    public navigateTo(): void {
        cy.visit(this.relativeUrl, { log: this.detailedLogs });
    }
}
