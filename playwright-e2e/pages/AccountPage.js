exports.AccountPage = class AccountPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.locator('[data-testid=account-welcome-message]');
  }
};
