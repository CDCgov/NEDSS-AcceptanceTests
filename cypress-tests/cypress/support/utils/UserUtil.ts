import User from '../models/User';
import { AddUserPage } from '../pages/AddUserPage';
import { EditUserPage } from '../pages/EditUserPage';
import ManageUsersPage from '../pages/ManageUsersPage';

export default class UserUtil {
    private static detailedLogs = Cypress.env('detailedLogs');
    private static baseUrl = Cypress.env('baseUrl');

    public static login(user: User): void {
        cy.visit(`${this.baseUrl}/nfc?UserName=${user.userId}`, { log: this.detailedLogs });
    }

    public static logout(): void {
        cy.visit(`${this.baseUrl}/logOut`, { log: this.detailedLogs });
    }

    public static createOrActivateUser(user: User): void {
        const manageUsersPage = new ManageUsersPage();
        manageUsersPage.navgiateTo();

        cy.get('table[class=TableInner]', { log: this.detailedLogs })
            .get('a', { log: this.detailedLogs })
            .then((links) => {
                let foundUser = false;
                for (let link of links) {
                    if (link.text === user.userId) {
                        // found the user, is it active?
                        foundUser = true;
                        if (link.parentElement?.nextSibling?.textContent === 'Inactive') {
                            // user exists but is inactive, lets set it to active
                            const editUserPage = new EditUserPage(user.userId);
                            editUserPage.navgiateTo();
                            editUserPage.setIsActive(true);
                            editUserPage.clickSubmit();
                        } else {
                            // user was found and already active
                            break;
                        }
                    }
                }
                if (!foundUser) {
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
