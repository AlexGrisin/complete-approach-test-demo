exports.SuccessfulRegistrationPage = class SuccessfulRegistrationPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.registrationMessage = page.locator('[data-testid=registration-success-message]');
  }
};
