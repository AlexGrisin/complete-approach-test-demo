import React from 'react';
import { Header } from '../components/Header';
import { UserContextProvider } from '../context/UserContext';

const user = {
  firstName: 'Test',
  lastName: 'User',
};

describe('<Header />', () => {
  it('shows logged in user', () => {
    cy.mount(
      <UserContextProvider userDetails={user}>
        <Header />
      </UserContextProvider>
    );
    cy.getByTestId('welcome-message').should('contain', user.firstName);
    cy.getByTestId('logout-button').should('exist');
  });

  it('shows guest user', () => {
    cy.mount(<Header />);
    cy.getByTestId('login-button').should('exist');
    cy.getByTestId('signup-button').should('exist');
  });
});
