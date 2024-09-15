const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      username: 'standard_user',
      password: 'secret_sauce'
    },
    "retries": 1,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: false
    },
    setupNodeEvents(on, config) {
    },
  },
});
