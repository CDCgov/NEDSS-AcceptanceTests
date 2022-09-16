import { defineConfig } from 'cypress';

export default defineConfig({
    env: {
        detailedLogs: false,
        cleanup: true
    },
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config);
        },
        specPattern: 'cypress/e2e/**/*.feature',
        scrollBehavior: 'center',
        baseUrl: 'http://localhost:7001/nbs',
        retries: { runMode: 2, openMode: 0 }
    }
});
