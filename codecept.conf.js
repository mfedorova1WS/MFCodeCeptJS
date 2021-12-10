const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './testsAltoro/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://try.vikunja.io',
      show: false,
      browser: 'chromium'
    },
    REST: {
      endpoint: 'http://demo.testfire.net/api',
    },
  },
  include: {
    I: './steps_file.js',
    //mainPage: './pages/main.js',
    //currentPage: './pages/current.js',
    headerPage: './pagesAltoro/Header.js',
    loginPage: './pagesAltoro/Login.js',
    myAccountPage: './pagesAltoro/MyAccount.js',
    testDataAltoroPage: './testData/TestDataAltoro.js',
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