import React, { createContext, useState } from "react";
import { Auth } from "aws-amplify";

export const UserContext = createContext({
  user: null,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
  resendConfirmationCode: () => {},
});

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    username: "",
    userConfirmed: false,
    userSub: "",
  });

  async function signIn({ username, password }) {
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
    } catch (err) {
      console.log("error signing in", err);
      throw err;
    }
  }

  async function signUp({ username, password, attributes: { email } }) {
    try {
      const { user, userConfirmed, userSub } = await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      setUser({ username: user.getUsername(), userConfirmed, userSub });
    } catch (err) {
      setUser(null);
      throw err;
    }
  }

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(user.username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
      throw err;
    }
  }

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log("error signing out: ", err);
      throw err;
    }
  }

  return (
    <UserContext.Provider
      value={{ user, signIn, signOut, signUp, resendConfirmationCode }}
    >
      {children}
    </UserContext.Provider>
  );
}
