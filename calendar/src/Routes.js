import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import { NavOutlet, AuthOutlet, PrivateOutlet } from "outlets";
import { Home, SignIn, SignUp, Code, MyCalendars } from "pages/index";

export default function Routes() {
  function multipleRoutes({ routes = [], element, ...props }) {
    return routes.map((path) => ({ path, element, ...props }));
  }

  return useRoutes([
    {
      path: "/",
      element: <PrivateOutlet redirectTo={"/auth"} />,
      children: [
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
          element: <Code />,
        },
        ...multipleRoutes({
          routes: ["", "*"],
          element: <Navigate to="signin" />,
        }),
      ],
    },
  ]);
}
