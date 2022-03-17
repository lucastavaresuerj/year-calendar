import React, { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  signin: () => {},
  logout: () => {},
  signup: () => {},
});

export default function UserProvider({ children }) {
  const [user, setUser] = useState();

  function signin() {}

  function logout() {}

  function signup() {}

  return (
    <UserContext.Provider value={{ user, signin, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
}
