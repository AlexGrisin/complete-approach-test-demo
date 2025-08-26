import React from 'react';
import { createContext, useState } from 'react';

export const UserContext = createContext({ user: {}, setUser: () => {} });

export const UserContextProvider = ({ userDetails, children }) => {
  const [user, setUser] = useState(userDetails);
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
