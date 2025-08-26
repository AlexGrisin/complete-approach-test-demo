import React from 'react';
import { RegistrationForm } from '../components/RegistrationForm';

describe('<RegistrationForm />', () => {
  beforeEach(() => {
    window.process = {
      env: {
        REACT_APP_API_SERVER: 'http://localhost:3001',
        // Add other env variables here as needed
      },
    };
  });

  it('successful registration', () => {
    cy.mockSuccessfulRegistrationResponse();
    cy.mountWithRouter(<RegistrationForm />);
    cy.getByTestId('login').type('username');
    cy.getByTestId('password').type('password');
    cy.getByTestId('firstName').type('firstname');
    cy.getByTestId('lastName').type('lastname');
    cy.getByTestId('submit').click();
    cy.getByTestId('registration-status').should('contain', 'success');
  });

  it('failed registration', () => {
    cy.mountWithRouter(<RegistrationForm />);
    cy.getByTestId('login').type('username');
    cy.getByTestId('firstName').type('firstname');
    cy.getByTestId('lastName').type('lastname');
    cy.getByTestId('submit').click();
    cy.getByTestId('registration-status').should('contain', 'error');
  });
});
