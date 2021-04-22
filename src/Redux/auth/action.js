import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
import axios from "axios";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};

const loginUser = (payload) => (dispatch) => {
  const requestAction = loginRequest();
  dispatch(requestAction);
  // const { username, password } = payload;
  return axios
    .post("http://localhost:8080/auth/login", payload)
    .then((res) => {
      const { error } = res.data;

      dispatch(
        loginSuccess({
          username: payload.username,
          token: res.data.token,
        })
      );
      return error;
    })
    .catch((err) => {
      const res = {
        error: "401",
      };
      const failureAction = loginFailure(err.message);
      dispatch(failureAction);
      return res;
    });
};

export { loginRequest, loginUser, loginSuccess, loginFailure };
