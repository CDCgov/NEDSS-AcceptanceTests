import BasePage from './BasePage';

export default class ContactPage extends BasePage {
    constructor() {
        super('/ContactTracing.do?method=viewContact&contactRecordUid=10011330&mode=View&Action=DSInvestigationPath&DSInvestigationCondition=10680');
    }

    setName(name: string): void {
        console.log('ContactPage:setName');
    }

    setFilename(fileName: string): void {
        console.log('ContactPage:setFilenme');
    }

    setDescription(description: string): void {
        console.log('ContactPage:setDescription');
    }

    clickSupplementalInfoTab(tabId: string): void {
        console.log('ContactPage:clickSupplementalInfoTab');
    }

    clickAddAttachmentButton(): void {
        console.log('ContactPage:clickAddAttachmentButton');
    }
}
