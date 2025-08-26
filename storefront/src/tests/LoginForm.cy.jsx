import React from 'react';
import { LoginForm } from '../components/LoginForm';

describe('<LoginForm />', () => {
  beforeEach(() => {
    window.process = {
      env: {
        REACT_APP_API_SERVER: 'http://localhost:3001',
        // Add other env variables here as needed
      },
    };
  });

  it('successfully logs in', () => {
    cy.mockSuccessfulLoginResponse();
    cy.mountWithRouter(<LoginForm />);
    cy.getByTestId('login').type('username');
    cy.getByTestId('password').type('password');
    cy.getByTestId('submit').click();
    cy.getByTestId('login-status').should('contain', 'success');
  });

  it('fails to log in', () => {
    cy.mountWithRouter(<LoginForm />);
    cy.getByTestId('login').type('username');
    cy.getByTestId('submit').click();
    cy.getByTestId('login-status').should('contain', 'error');
  });
});
