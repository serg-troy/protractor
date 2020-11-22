const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/specs/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
    marionette: true,
    acceptInsecureCerts: true,
  },

  jasmineNodeOpts: {
    print: function () {},
  },

  onPrepare: function () {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true,
        },
        spec: {
          displayPending: true,
          displayDuration: true,
        },
        summary: {
          displaySuccesses: false,
          displayFailed: false,
          displayPending: false,
        },
      })
    );
  },
};
