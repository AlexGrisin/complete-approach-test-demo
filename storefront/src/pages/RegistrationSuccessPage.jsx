import React from 'react';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

export const RegistrationSuccessPage = () => {
  return (
    <>
      <Header />
      <div data-testid="registration-success-message">Registration successful</div>
      <Link to="/login" data-testid="login-link">
        Go to login
      </Link>
    </>
  );
};
