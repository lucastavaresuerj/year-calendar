import React, { createContext, useState } from "react";
import { Auth } from "aws-amplify";

export const UserContext = createContext({
  user: null,
  isAuth: false,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
  resendConfirmationCode: () => {},
  confirmVrfCode: () => {},
});

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    username: "",
    userConfirmed: false,
    userSub: "",
  });
  const [isAuth, setIsAuth] = useState(false);

  async function signIn({ username, password }) {
    try {
      const user = await Auth.signIn(username, password);
      setIsAuth(true);
    } catch (err) {
      if (err.name === "UserNotConfirmedException") {
        setUser({ ...user, username, password });
      }
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
      setIsAuth(true);
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

  async function confirmVrfCode({ code, username = user.username }) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (err) {
      console.log("error confirming sign up", err.name);
      throw err;
    }
    const { password, ...userState } = user;
    setUser(userState);
  }

  async function signOut() {
    try {
      await Auth.signOut();
      setUser(null);
      setIsAuth(false);
    } catch (err) {
      console.log("error signing out: ", err.name);
      throw err;
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isAuth,
        signIn,
        signOut,
        signUp,
        resendConfirmationCode,
        confirmVrfCode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
