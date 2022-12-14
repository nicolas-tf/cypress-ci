const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4avc81',
  video: false,
  e2e: {
    specPattern: 'cypress/e2e/*/**.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
