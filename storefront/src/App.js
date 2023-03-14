import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { AccountPage } from './pages/AccountPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  const [user, setUser] = useState({});
  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
