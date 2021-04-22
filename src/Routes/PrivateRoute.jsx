import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({
  redirectPath = "/login",
  push = false,
  path,
  children,
  exact = false,
}) => {
  const { isAuth } = React.useContext(AuthContext);
  return isAuth ? (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirectPath} push={push} />
  );
};
export { PrivateRoute };
