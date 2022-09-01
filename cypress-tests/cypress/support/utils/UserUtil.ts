import User from '../models/User';
import { AddUserPage } from '../pages/AddUserPage';
import { EditUserPage } from '../pages/EditUserPage';
import ManageUsersPage from '../pages/ManageUsersPage';

export default class UserUtil {
    private static detailedLogs = Cypress.env('detailedLogs');

    public static login(user: User): Cypress.Chainable {
        return cy.visit(`/nfc?UserName=${user.userId}`, { log: this.detailedLogs });
    }

    public static logout(): void {
        cy.visit(`/logOut`, { log: this.detailedLogs });
    }

    public static getUserState(user: User): Cypress.Chainable<'Active' | 'Inactive' | 'Null'> {
        const manageUsersPage = new ManageUsersPage();
        manageUsersPage.navgiateTo();
        return cy
            .get('table[class=TableInner]', { log: this.detailedLogs })
            .get('a', { log: this.detailedLogs })
            .then((links) => {
                for (let link of links) {
                    if (link.text === user.userId) {
                        const active = link.parentElement?.nextSibling?.textContent === 'Active';
                        return active ? 'Active' : 'Inactive';
                    }
                }
                return 'Null';
            });
    }

    public static createOrActivateUser(user: User): void {
        const manageUsersPage = new ManageUsersPage();
        manageUsersPage.navgiateTo();
        this.getUserState(user).then((userState) => {
            if (userState === 'Inactive') {
                const editUserPage = new EditUserPage(user.userId);
                editUserPage.navgiateTo();
                editUserPage.setIsActive(true);
                editUserPage.clickSubmit();
            }
            if (userState === 'Null') {
                // create user
                const addUserPage = new AddUserPage();
                addUserPage.navgiateTo();
                addUserPage.setUserId(user.userId);
                addUserPage.setFirstName(user.firstName);
                addUserPage.setLastName(user.lastName);
                user.roles.forEach((r) => addUserPage.addRole(r));
                addUserPage.clickSubmit();
            }
        });
    }

    public static deactivateUser(user: User): void {
        const editUserPage = new EditUserPage(user.userId);
        editUserPage.navgiateTo();
        editUserPage.setIsActive(false);
        editUserPage.clickSubmit();
    }
}
