import React from 'react'
import { LoginForm } from './LoginForm'

describe('<LoginForm />', () => {
  it('successfully logs in', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoginForm />);
    cy.getByTestId('login').type('username');
    cy.getByTestId('password').type('password');
    cy.getByTestId('submit').click();
    cy.getByTestId('login-status').should('contain', 'success');
  })
})