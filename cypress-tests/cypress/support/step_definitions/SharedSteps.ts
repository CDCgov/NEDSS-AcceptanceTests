/// <reference types="cypress" />
import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import PatientSearchPage from '../pages/PatientSearchPage';
import PatientMother from '../utils/PatientMother';
import PatientUtil from '../utils/PatientUtil';
import UserMother from '../utils/UserMother';
import UserUtil from '../utils/UserUtil';

Given(/I am a (.*) user/, (userType: 'data entry' | 'admin') => {
    switch (userType) {
        case 'data entry':
            UserUtil.login(UserMother.clericalDataEntry());
            break;
        case 'admin':
            UserUtil.login(UserMother.systemAdmin());
            break;
    }
});

Given('a patient exists', () => {
    UserUtil.login(UserMother.supervisor());
    const patient = PatientMother.patient();
    PatientUtil.createPatientIfNotExists(patient);
});
