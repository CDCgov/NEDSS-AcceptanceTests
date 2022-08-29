/// <reference types="cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps';
import PatientMother from '../utils/PatientMother';
import PatientUtil from '../utils/PatientUtil';
import UserMother from '../utils/UserMother';
import UserUtil from '../utils/UserUtil';

Given('a patient exists', () => {
    UserUtil.login(UserMother.supervisor());
    const patient = PatientMother.patient();
    PatientUtil.createPatientIfNotExists(patient);
});

Given(/I am a (.*) user/, (userType: 'data entry' | 'admin' | 'supervisor') => {
    switch (userType) {
        case 'data entry':
            UserUtil.login(UserMother.clericalDataEntry());
            break;
        case 'admin':
            UserUtil.login(UserMother.systemAdmin());
            break;
        case 'supervisor':
            UserUtil.login(UserMother.supervisor());
            break;
    }
});
