// @ts-check
const { test, expect } = require('@playwright/test');
const { AccountPage } = require('../pages/AccountPage');
const { LoginPage } = require('../pages/LoginPage');

test('should log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin('test', 'password');

  const accountPage = new AccountPage(page);
  await expect(accountPage.welcomeMessage).toHaveText(/Greetings/);
});

test('should see log in error on missing credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin('test', '');

  await expect(loginPage.loginStatus).toHaveText(/Login error/);
});

test('should see log in error on invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin('invalid', 'password');

  await expect(loginPage.loginStatus).toHaveText(/bad credentials/);
});
