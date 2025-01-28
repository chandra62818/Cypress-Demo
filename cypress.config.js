const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl :'https://www.automationexercise.com/',
    chromeWebSecurity :false,
    watchForFileChanges :false,
    specPattern:"cypress/e2e/**/*.cy.js",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile});
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
