const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoblaze.com',
    env: {
      username: 'testsammy123@gmail.com',
      password: 'test123##'
    },
    "retries": 1,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      charts: true,
      reportPageTitle: 'index.html',
      html: false,
      json: true,
      embeddedScreenshots: true,
    },
    setupNodeEvents(on, config) {
    },
  },
});
