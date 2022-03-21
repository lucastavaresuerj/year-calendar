import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import { NavOutlet, AuthOutlet } from "outlets";
import { Home, SignIn, SignUp, MyCalendars } from "./pages/index";

export default function Routes() {
  function multipleRoutes({ routes = [], element, ...props }) {
    return routes.map((path) => ({ path, element, ...props }));
  }

  return useRoutes([
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
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "code",
          element: <SignUp />,
        },
        ...multipleRoutes({
          routes: ["", "*"],
          element: <Navigate to="signin" />,
        }),
      ],
    },
  ]);
}
