/// <reference types="cypress" />
import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given(/I am a (.*) user/, (userType: 'data entry' | 'admin') => {});

Given('a patient exists', () => {
    // Write code here that turns the phrase above into concrete actions
});

When('I search for a patient', () => {
    // Write code here that turns the phrase above into concrete actions
});
