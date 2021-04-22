import axios from "axios";
import { REG_FAILURE, REG_REQUEST, REG_SUCCESS } from "./actionType";

const regRequest = () => {
  return {
    type: REG_REQUEST,
  };
};

const regSuccess = (payload) => {
  return {
    type: REG_SUCCESS,
    payload,
  };
};

const regFailure = () => {
  return {
    type: REG_FAILURE,
  };
};

const regUser = (payload) => (dispatch) => {
  dispatch(regRequest());

  return axios
    .post(`http://localhost:8080/auth/register`, payload)
    .then((res) => {
      dispatch(regSuccess(res.data));
      const { error } = res.data;
      return error;
    })
    .catch((err) => {
      dispatch(regFailure());
    });
};

export { regFailure, regUser, regSuccess, regRequest };
