import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { AccountPage } from './pages/AccountPage';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { RegistrationSuccessPage } from './pages/RegistrationSuccessPage';

function App() {
  const user = {};

  return (
    <UserContextProvider userDetails={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<RegistrationPage />} />
          <Route path="/success" element={<RegistrationSuccessPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
