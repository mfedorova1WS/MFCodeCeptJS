/*const assert = require ('assert');
Feature('auth');

Scenario('Auth with valid login and valid pass API',async ({ I }) => {
  const request = await I.sendPostRequest('/login', { "username": "demo", "password": "demo" });
  assert.deepEqual(request.status,200);
});

Scenario('Auth with valid login and valid pass UI',async ({ I, mainPage, currentPage }) => {
  I.amOnPage("/")
  await mainPage.login('demo', 'demo');
  const profileNameText = await currentPage.getProfileName();
  assert.deepEqual(profileNameText, 'demo');
});
*/
