import React from 'react';
import { LoginForm } from '../components/LoginForm';

describe('<LoginForm />', () => {
  it('successfully logs in', () => {
    cy.mockSuccessfulLoginResponse();
    cy.mount(<LoginForm />);
    cy.getByTestId('login').type('username');
    cy.getByTestId('password').type('password');
    cy.getByTestId('submit').click();
    cy.getByTestId('login-status').should('contain', 'success');
  });

  it('fails to log in', () => {
    cy.mount(<LoginForm />);
    cy.getByTestId('login').type('username');
    cy.getByTestId('submit').click();
    cy.getByTestId('login-status').should('contain', 'error');
  });
});
