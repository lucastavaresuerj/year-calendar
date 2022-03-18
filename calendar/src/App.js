import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import "styles/style.scss";

import UserProvider from "contexts/User.context";
import { NavOutlet, AuthOutlet } from "outlets";
import { Home, Login, MyCalendars } from "./pages/index";

export default function App() {
  function multipleRoutes({ routes = [], element, ...props }) {
    return routes.map((path) => ({ path, element, ...props }));
  }

  const routes = useRoutes([
    {
      path: "/",
      element: <NavOutlet />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "my-calendars",
          element: <MyCalendars />,
        },
      ],
    },
    {
      path: "auth",
      element: <AuthOutlet />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        ...multipleRoutes({
          routes: ["", "*"],
          element: <Navigate to="login" />,
        }),
      ],
    },
  ]);

  return <UserProvider>{routes}</UserProvider>;
}
