const { defineConfig } = require("cypress");
const { configurePlugin } = require('cypress-mongodb');
require('dotenv').config();

module.exports = defineConfig({
    reporter: 'cypress-multi-reporters',
    video: true,
    reporterOptions: {
        reporterEnabled: 'cypress-mochawesome-reporter',
        cypressMochawesomeReporterReporterOptions: {
            charts: true,
            reportPageTitle: 'Relatório de Testes',
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false
        }
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            configurePlugin(on);
        },
    }
});