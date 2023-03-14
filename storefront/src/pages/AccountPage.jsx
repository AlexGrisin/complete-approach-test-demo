import React, { useContext } from 'react';
import { Header } from '../components/Header';
import { UserContext } from '../context/UserContext';

export const AccountPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header user={user} />
      <div>Greetings, {user?.firstName}</div>
    </>
  );
};
