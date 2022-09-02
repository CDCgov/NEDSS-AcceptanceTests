import { defineConfig } from 'cypress';

export default defineConfig({
    env: {
        detailedLogs: true,
        cleanUp: false
    },
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config);
        },
        specPattern: 'cypress/e2e/*.feature',
        scrollBehavior: 'center',
        baseUrl: 'http://localhost:7001/nbs'
    }
});
