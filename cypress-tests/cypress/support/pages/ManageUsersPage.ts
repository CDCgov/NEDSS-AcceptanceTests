import BasePage from '../utils/BasePage';

export default class ManageUsersPage extends BasePage {
    constructor() {
        super('/userList.do');
    }
}
