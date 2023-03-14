import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext, UserContextProvider } from './context/UserContext';
import { AccountPage } from './pages/AccountPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  const user = {};

  return (
    <UserContextProvider userDetails={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
