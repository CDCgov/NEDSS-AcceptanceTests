import BasePage from './BasePage';

export class UserLogin {
    public static Login(userId: string): void {
        cy.visit(`${BasePage.baseUrl}/nfc?UserName=${userId}`);
    }
}
