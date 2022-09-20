import BasePage from './BasePage';
import 'cypress-file-upload';

enum Selector {
    FILEUPLOAD_IFRAME = 'IFRAME[id=addFileFrame]',
    FILEUPLOAD_FILE = 'INPUT[type=file]',
    ATTACHMENTS_TABLE = 'TABLE[id=attachmentsDTTable]'
}

export default class ContactPage extends BasePage {
    constructor() {
        super('/ContactTracing.do?method=viewContact&contactRecordUid=10011330&mode=View&Action=DSInvestigationPath&DSInvestigationCondition=10680');
    }

    setFileAttachmentPath(filepath: string): void {
        // Cypress does not search inside iframes
        // So we must get the iframe content first, then use
        // "find" not "get" and cy.wrap the result
        cy.get(Selector.FILEUPLOAD_IFRAME).then(($iframe) => {
            const doc = $iframe.contents();
            cy.wrap(doc.find(Selector.FILEUPLOAD_FILE)).attachFile(filepath);
        });
    }

    setFileAttachmentName(name: string): void {
        cy.window().then((win) => {
            const attachFrameWin = win.frames[0];
            const nameInput = attachFrameWin.document.getElementsByTagName('INPUT')[1];
            nameInput.value = name;
        });
    }

    setFileAttachmentDescription(description: string): void {
        cy.window().then((win) => {
            const attachFrameWin = win.frames[0];
            const descriptionInput = attachFrameWin.document.getElementsByTagName('TEXTAREA')[0];
            descriptionInput.value = description;
        });
    }

    clickSupplementalInfoTab(): void {
        this.clickFirst('td[id=tabs0head3]');
        console.log('ContactPage:clickSupplementalInfoTab');
    }

    clickAddAttachmentButton(): void {
        this.click('input[value="Add Attachment"]');
        console.log('ContactPage:clickAddAttachmentButton');
    }

    clickFileAttachmentSubmit(): void {
        cy.window().then((win) => {
            const attachFrameWin = win.frames[0];
            const submitBtn = attachFrameWin.document.getElementsByTagName('INPUT')[2];
            cy.wrap(submitBtn).click();
        });
    }

    getAttachmentsTable(): Cypress.Chainable {
        return this.getElement(Selector.ATTACHMENTS_TABLE);
    }
}
