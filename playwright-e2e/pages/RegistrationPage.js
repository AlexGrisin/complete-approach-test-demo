exports.RegistrationPage = class RegistrationPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userNameField = page.locator('[data-testid=login]');
    this.passwordField = page.locator('[data-testid=password]');
    this.firstNameField = page.locator('[data-testid=firstName]');
    this.lastNameField = page.locator('[data-testid=lastName]');
    this.submitButton = page.locator('[data-testid=submit]');
    this.registrationStatus = page.locator('[data-testid=registration-status]');
  }

  async goto() {
    await this.page.goto('/create');
  }

  async register(username, password, firstName, lastName) {
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.submitButton.click();
  }
};
