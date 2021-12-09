const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://try.vikunja.io',
      show: true,
      browser: 'chromium'
    },
    REST: {
      endpoint: 'https://try.vikunja.io/api/v1',
    },
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    currentPage: './pages/current.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'MFCodeCeptJS',
  plugins: {
    allure: {},
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
  }
}