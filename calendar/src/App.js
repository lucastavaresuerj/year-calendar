import React from "react";

import "styles/style.scss";

import UserProvider from "contexts/User.context";

import Routes from "./Routes";

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
