
const { deepEqual } = require('assert');
const { I, loginPage, myAccountPage, testDataAltoroPage } = inject();

Feature('Altoro auth tests');

Scenario('1. user can login with a valid name and valid password. UI', async ({ I }) => {
    I.amOnPage(testDataAltoroPage.altoroSite);
    await loginPage.login(testDataAltoroPage.validUserName, testDataAltoroPage.validPassword);
    I.seeElement(locate(myAccountPage.welcomeBanner).withText(`Hello ${testDataAltoroPage.validUserName} User`));
});

Scenario('2. user cannot login with a valid name and invalid password. UI', async ({ I }) => {
    I.amOnPage(testDataAltoroPage.altoroSite);
    await loginPage.login(testDataAltoroPage.validUserName, testDataAltoroPage.invalidPassword);
    I.seeElement(loginPage.loginFailedBanner);
});

Scenario('3. user cannot login with a valid name and whitespace password. UI', async ({ I }) => {
    I.amOnPage(testDataAltoroPage.altoroSite);
    await loginPage.login(testDataAltoroPage.validUserName, testDataAltoroPage.whitespacePassword);
    I.seeElement(loginPage.loginFailedBanner);
});
Scenario('4. user can login with a valid name and valid password. API', async ({ I }) => {
    const response = await I.sendPostRequest('/login', { "username": "admin", "password": "admin" });
    console.log(response.data.success);
    deepEqual(response.data.success, 'admin is now logged in');
    deepEqual(response.status, 200);
});

Scenario('5. user cannot login with a valid name and invalid password. API', async ({ I }) => {
    const response = await I.sendPostRequest('/login', { "username": "admin", "password": "1234567" });
    deepEqual(response.status, 400);
});