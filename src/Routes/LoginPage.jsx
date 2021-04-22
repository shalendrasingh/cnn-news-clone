import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Login } from "../Components/Pages/Login";
import { loginUser } from "../Redux/auth//action";

const LoginPage = () => {
  const dispatch = useDispatch();

  const { isAuth, isError, isLoading } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const handleLogin = ({ username, password }) => {
    dispatch(loginUser({ username, password }));
  };
  if (isAuth) {
    return <Redirect to="/"></Redirect>;
  }

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <Login handleLogin={handleLogin}></Login>
      {isLoading && <div>...loading</div>}
      {isError && <div>Somwthing went wrong</div>}
    </div>
  );
};

export { LoginPage };
