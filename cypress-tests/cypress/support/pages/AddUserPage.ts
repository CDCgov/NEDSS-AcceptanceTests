import BasePage from '../utils/BasePage';
enum Selector {
    USER_ID = 'input[id=userProfile\\.theUser_s\\.userID]',
    FIRST_NAME = 'input[id=userProfile\\.theUser_s\\.firstName]',
    LAST_NAME = 'input[id=userProfile\\.theUser_s\\.lastName]',
    STATUS_ACTIVE_RADIO = 'input[id=ACTIVE]',
    STATUS_INACTIVE_RADIO = 'input[id=INACTIVE]',
    EXTERNAL_CHECKBOX = 'input[name=userProfile\\.theUser_s\\.userType]',
    MASTER_SECURITY_ADMIN = 'input[name=userProfile\\.theUser_s\\.msa]',
    PROGRAM_AREA_ADMIN = 'input[name=userProfile\\.theUser_s\\.paa]',
    ROLE_JURISDICTION = 'select[name=userProfile\\.theRealizedRole_s\\[i\\]\\.jurisdictionCode]',
    ROLE_PROGRAM_AREA = 'select[name=userProfile\\.theRealizedRole_s\\[i\\]\\.programAreaCode]',
    ROLE_PERMISSION_SET = 'select[name=userProfile\\.theRealizedRole_s\\[i\\]\\.roleName]',
    ROLE_GUEST_CHECKBOX = 'input[name=userProfile\\.theRealizedRole_s\\[i\\]\\.guestString]',
    ROLE_ADD_ROLE_BTN = 'input[id=BatchEntryAddButtonRole]',
    SUBMIT_BTN = 'input[id=Submit]'
}
interface Role {
    jurisdiction: string;
    programArea: string;
    permissionSet: string;
    isGuest: boolean;
}
export class AddUserPage extends BasePage {
    constructor(relativeUrl = '/loadUser.do?OperationType=create', detailedLogs: boolean = false) {
        super(relativeUrl, detailedLogs);
    }

    setUserId(userId: string): void {
        this.typeValue(Selector.USER_ID, userId);
    }

    setFirstName(firstName: string): void {
        this.typeValue(Selector.FIRST_NAME, firstName);
    }

    setLastName(lastName: string): void {
        this.typeValue(Selector.LAST_NAME, lastName);
    }

    setIsActive(isActive: boolean): void {
        if (isActive) {
            this.click(Selector.STATUS_ACTIVE_RADIO);
        } else {
            this.click(Selector.STATUS_INACTIVE_RADIO);
        }
    }

    setIsExternal(isExternal: boolean): void {
        this.setChecked(Selector.EXTERNAL_CHECKBOX, isExternal);
    }

    setReportingFacility(facility: string): void {
        throw new Error('setReportingFacility NYI');
    }

    setProgramArea(programArea: string): void {
        throw new Error('setProgramArea NYI');
    }

    addRole(role: Role): void {
        this.selectValue(Selector.ROLE_JURISDICTION, role.jurisdiction);
        this.selectValue(Selector.ROLE_PROGRAM_AREA, role.programArea);
        this.selectValue(Selector.ROLE_PERMISSION_SET, role.permissionSet);
        this.setChecked(Selector.ROLE_GUEST_CHECKBOX, role.isGuest);
        this.click(Selector.ROLE_ADD_ROLE_BTN);
    }

    clickSubmit(): void {
        // multiple buttons that have id 'Submit'
        cy.get(Selector.SUBMIT_BTN, { log: this.detailedLogs })
            .first({ log: this.detailedLogs })
            .click({ log: this.detailedLogs });
    }
}
