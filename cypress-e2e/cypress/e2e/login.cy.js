describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('should log in', () => {
    cy.mockSuccessfulLoginResponse();
    cy.userLogin('user', 'password');
    cy.url().should('include', '/account');
  });

  it('should see log in error on missing credentials', () => {
    cy.userLogin('user', '');
    cy.getByTestId('login-status').should('contain', 'error');
  });

  it('should see log in error on invalid credentials', () => {
    cy.invalidCredentialsLoginMock();
    cy.userLogin('invalid', 'password');
    cy.getByTestId('login-status').should('contain', 'bad credentials');
  });
});
