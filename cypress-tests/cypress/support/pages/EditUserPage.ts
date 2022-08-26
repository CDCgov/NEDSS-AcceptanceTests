import { AddUserPage } from './AddUserPage';

export class EditUserPage extends AddUserPage {
    constructor(userId: string, detailedLogs: boolean = false) {
        super(`/loadUser.do?OperationType=edit&userID=${userId}`, detailedLogs);
    }
}
