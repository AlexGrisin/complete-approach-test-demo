// @ts-check
const { test, expect } = require('@playwright/test');
const { successRegistrationMock, duplicateRegistrationMock } = require('../mocks/userMock');
const { RegistrationPage } = require('../pages/RegistrationPage');
const { SuccessfulRegistrationPage } = require('../pages/SuccessfulRegistrationPage');

test('should register new account', async ({ page }) => {
  await successRegistrationMock(page);

  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await registrationPage.register('test', 'password', 'firstname', 'lastname');

  const successfulRegistrationPage = new SuccessfulRegistrationPage(page);
  await expect(successfulRegistrationPage.registrationMessage).toHaveText(/success/);
});

test('should see log in error on invalid data', async ({ page }) => {
  await duplicateRegistrationMock(page);

  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await registrationPage.register('test', 'password', 'firstname', 'lastname');

  await expect(registrationPage.registrationStatus).toHaveText(/error/);
});
