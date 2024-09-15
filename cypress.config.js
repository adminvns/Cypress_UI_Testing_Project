const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoblaze.com',
    env: {
      username: 'testsammy123@gmail.com',
      password: 'test123##'
    },
    "retries": 0,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    setupNodeEvents(on, config) {
    },
  },
});
