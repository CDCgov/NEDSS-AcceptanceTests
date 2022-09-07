# CDC-NBS-AcceptanceTests

## Running the tests
Running the tests requires you have a local instance of NBS up and running. See [CDC-Sandbox](https://github.com/enquizit/cdc-sandbox) for more details on how to do this.
There are a few options on how to run the tests:
1. `mvn test` uses the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) to install node/npm and then calls `npm run test`
1. `npm run test` from the cypress-tests directory (requires `npm install`) will execute the tests headlessly
1. `npm run cypress` from the cypress-tests directory will open the [Cypress](https://www.cypress.io/) test runner

## References
1. [Cypress](https://www.cypress.io/)
1. [Cucumber](https://cucumber.io/)
1. [Cypress-Cucumber-Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
