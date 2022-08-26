/// <reference types="cypress" />

import { After, Before, Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { AddUserPage } from '../pages/AddUserPage';
import { EditUserPage } from '../pages/EditUserPage';
import { UserLogin } from '../utils/UserLogin';

Before(() => {
    // login as MSA user
    UserLogin.Login('msa');

    // create data entry user
    const addUserPage = new AddUserPage();
    addUserPage.navgiateTo();
    addUserPage.setUserId('test-clerical');
    addUserPage.setFirstName('test');
    addUserPage.setLastName('user');
    addUserPage.addRole({
        jurisdiction: 'All',
        programArea: 'HIV',
        permissionSet: 'NEDSS Clerical Data Entry',
        isGuest: false
    });
    addUserPage.clickSubmit();
});

After(() => {
    const editUserPage = new EditUserPage('test-clerical');
    editUserPage.navgiateTo();
    editUserPage.setIsActive(false);
    editUserPage.clickSubmit();
});

Then('I can view the patients summary', () => {
    // Write code here that turns the phrase above into concrete actions
});
