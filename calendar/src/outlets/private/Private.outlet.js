import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { UserContext } from "contexts/User.context";

export default function PrivateOutlet({ redirectTo = "/auth" }) {
  const { isAuth } = useContext(UserContext);

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}
