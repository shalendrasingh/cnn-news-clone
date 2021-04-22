import axios from "axios";

import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

const getDataFailure = () => {
  return {
    type: GET_DATA_FAILURE,
  };
};

const gitHubUserSearch = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  // const { user } = payload;
  return axios
    .get(`https://api-unit-project-news.herokuapp.com/world`)
    .then((res) => {
      dispatch(getDataSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};

// code for geting data for africa

const fetchAfricaData = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get(`https://api-unit-project-news.herokuapp.com/africa`)
    .then((res) => {
      dispatch(getDataSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};

// code get data for america
const fetchAmericaData = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get(`https://api-unit-project-news.herokuapp.com/america`)
    .then((res) => {
      dispatch(getDataSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};
// code get data for america
const fetchAsiaData = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get(`https://api-unit-project-news.herokuapp.com/asia`)
    .then((res) => {
      dispatch(getDataSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};
export { gitHubUserSearch, fetchAfricaData, fetchAsiaData, fetchAmericaData };
