const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //"baseUrl":"",
    "specPattern":"cypress/e2e/smoketests/addemployee.cy.js",
    "pageLoadTimeout": 120000,
    "defaultCommandTimeout": 20000,
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "retries": {"openMode":2, "runMode": 0},
    "video":true,
    "env":{
              
      "username" : "Admfvbhin",
      "password": "rjg",
      "endpoint": "https://staging.opensource-demo.orangehrmlive.com/web/index.php/auth/login"

    },
    "excludeSpecPattern": "cypress/e2e/smoketests/flipcart.cy.js",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
