const { defineConfig } = require("cypress");
const { readFileSync } = require('fs')

module.exports = defineConfig({
  e2e: {
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
      console.log(config.env)
      const envName = config.env.name || 'dev';
      const text = readFileSync(`environment_configs/${envName}.json`);
      const values = JSON.parse(text);
      config.env = {
          "baseUrl": values.baseUrl,
          "userName": values.userName,
          "userPassword": values.userPassword
      }
      return config;
    },
  },
});
