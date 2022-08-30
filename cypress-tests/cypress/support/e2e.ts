// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    // NBS throws some javascript exceptions on certain pages. These will fail the tests, catching them here to prevent test failure
    cy.on('uncaught:exception', (error, runnable) => {
        return !(
            error.message.includes('Cannot read properties of undefined (reading') ||
            error.message.includes('Cannot read properties of null (reading')
        );
    });
});
