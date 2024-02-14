const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
   "specPattern":"cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
   "downloadsFolder":"cypress/downloads",
   "excludeSpecPattern": "cypress/e2e/smoketests/flipcart.cy.js",
    "pageLoadTimeout": 120000,
    "defaultCommandTimeout": 20000,
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "retries": {"openMode":2, "runMode": 0},
    "video":true,
    "env":{
              
      "username" : "Admin",
      "password": "admin123",
      "endpoint": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      // implement node event listeners here
    },
  },
});
