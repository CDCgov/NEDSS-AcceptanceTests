/// <reference types="cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps';
import PatientMother from '../utils/PatientMother';
import PatientUtil from '../utils/PatientUtil';
import UserMother from '../utils/UserMother';
import UserUtil from '../utils/UserUtil';

Given(/I am a (.*) user/, (userType: 'data entry' | 'admin' | 'supervisor' | 'registry manager') => {
    switch (userType) {
        case 'data entry':
            UserUtil.login(UserMother.systemAdmin()).then(() => {
                UserUtil.createOrActivateUser(UserMother.clericalDataEntry());
            });
            UserUtil.login(UserMother.clericalDataEntry());
            break;
        case 'admin':
            UserUtil.login(UserMother.systemAdmin());
            break;
        case 'supervisor':
            UserUtil.login(UserMother.systemAdmin()).then(() => {
                UserUtil.createOrActivateUser(UserMother.supervisor());
            });
            UserUtil.login(UserMother.supervisor());
            break;
        case 'registry manager':
            UserUtil.login(UserMother.systemAdmin()).then(() => {
                UserUtil.createOrActivateUser(UserMother.registryManager());
            });
            UserUtil.login(UserMother.registryManager());
            break;
        case 'dis':
            UserUtil.login(UserMother.systemAdmin()).then(() => {
                UserUtil.createOrActivateUser(UserMother.disUser());
            });
            UserUtil.login(UserMother.disUser());
            break;
    }
});

Given(/a patient exists/, () => {
    UserUtil.login(UserMother.systemAdmin()).then(() => {
        UserUtil.createOrActivateUser(UserMother.supervisor());
    });
    UserUtil.login(UserMother.supervisor()).then(() => {
        PatientUtil.createPatientIfNotExists(PatientMother.patient());
    });
});
