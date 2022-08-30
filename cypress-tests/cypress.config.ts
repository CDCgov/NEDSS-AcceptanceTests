import { defineConfig } from 'cypress';

export default defineConfig({
    env: {
        detailedLogs: false,
        baseUrl: 'http://localhost:7001/nbs'
    },
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config);
        },
        specPattern: 'cypress/e2e/*.feature',
        scrollBehavior: 'center'
    }
});
