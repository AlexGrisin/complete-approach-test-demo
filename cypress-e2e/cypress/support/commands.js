// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByTestId', testId => {
  return cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('userLogin', (userName, password) => {
  if (userName) {
    cy.getByTestId('login').type(userName);
  }
  if (password) {
    cy.getByTestId('password').type(password);
  }
  cy.getByTestId('submit').click();
});

Cypress.Commands.add('mockSuccessfulLoginResponse', () => {
  cy.intercept('POST', 'http://localhost:3001/login', {
    statusCode: 200,
    body: {
      statusCode: 200,
      statusMessage: 'Login success',
    },
  });
});

Cypress.Commands.add('mockSuccessfulLoginResponse', () => {
  cy.intercept('POST', 'http://localhost:3001/login', {
    statusCode: 200,
    body: {
      statusCode: 200,
      statusMessage: 'Login success',
    },
  });
});

Cypress.Commands.add('invalidCredentialsLoginMock', () => {
  cy.intercept('POST', 'http://localhost:3001/login', {
    statusCode: 400,
    body: {
      statusCode: 400,
      statusMessage: 'Login failed: bad credentials',
      user: {},
    },
  });
});
