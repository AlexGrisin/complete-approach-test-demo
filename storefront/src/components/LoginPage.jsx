import React, { useState } from 'react';
import { Header } from './Header';
import { LoginForm } from './LoginForm';
import './form.css';

export const LoginPage = () => {
  const [user, setUser] = useState({});

  const handleLogin = user => {
    setUser(user);
  };

  return (
    <>
      <Header user={user} />
      <LoginForm handleLogin={handleLogin} user={user} />
    </>
  );
};
