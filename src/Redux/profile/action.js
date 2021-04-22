import axios from "axios";

import {
  GET_PROFILE_DATA_FAILED,
  GET_PROFILE_DATA_REQUEST,
  GET_PROFILE_DATA_SUCCESS,
} from "./actionType";

const getProfileDataRequest = () => {
  return {
    type: GET_PROFILE_DATA_REQUEST,
  };
};

const getProfileDataSuccess = (payload) => {
  return {
    type: GET_PROFILE_DATA_SUCCESS,
    payload,
  };
};

const getProfileDataFailure = () => {
  return {
    type: GET_PROFILE_DATA_FAILED,
  };
};

// code for geting Profile data

const fetchProfileData = (payload) => (dispatch) => {
  dispatch(getProfileDataRequest());
  // console.log(payload, "pay");
  return axios
    .get(`http://localhost:8080/user/${payload.username}`, {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    })
    .then((res) => {
      dispatch(getProfileDataSuccess(res.data));
      const { error } = res.data;
      return error;
    })
    .catch((err) => {
      dispatch(getProfileDataFailure());
    });
};

export { fetchProfileData };
