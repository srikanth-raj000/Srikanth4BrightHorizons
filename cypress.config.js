const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
  },
  projectId: "BrightHorizons_1",
  e2e: {
    setupNodeEvents,
      specPattern: 'cypress/integration/Features/*.feature'
  },
  env: {
    test_url: 'https://www.brighthorizons.com/',
    prod_url: 'https://www.prod-brighthorizons.com/',
    performance_url: 'https://www.performance-brighthorizons.com/',
    preprod_url: 'https://www.preprod-brighthorizons.com/',
    dev_url: 'https://www.dev-brighthorizons.com/',
    uat_url: 'https://www.uat-brighthorizons.com/',
    username: 'srikanth_raj',
    email: 'srikanth.rajashekhar@gmail.com',
    password: 'BrightHorizons$984'
  },
  video: true,
});
