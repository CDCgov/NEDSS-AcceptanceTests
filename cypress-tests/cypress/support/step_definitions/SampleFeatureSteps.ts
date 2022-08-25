/// <reference types="cypress" />

import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
const BASE_URL = 'http://localhost:7001/';

Given(/I open (.*)$/, (path: string) => {
    cy.visit(BASE_URL + path);
});

Then(/I can see the login page/, () => {
    cy.get('input[name=UserName').should('be.visible');
    cy.get('input[name=Password').should('be.visible');
});
