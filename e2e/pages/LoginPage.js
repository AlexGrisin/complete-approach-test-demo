exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userNameField = page.locator('[data-testid=login]');
    this.passwordField = page.locator('[data-testid=password]');
    this.signInButton = page.locator('[data-testid=submit]');
    this.loginStatus = page.locator('[data-testid=login-status]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async userLogin(username, password) {
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
};
