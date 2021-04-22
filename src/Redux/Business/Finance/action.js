import axios from 'axios'

import {
  GET_FINANCE_REQUEST,
  GET_FINANCE_SUCCESS,
  GET_FINANCE_FAILURE,
} from './actionType'

const getfinanceRequest = () => {
  return {
    type: GET_FINANCE_REQUEST,
  }
}

const getfinanceSuccess = (payload) => {
  return {
    type: GET_FINANCE_SUCCESS,
    payload,
  }
}

const getfinanceFailure = () => {
  return {
    type: GET_FINANCE_FAILURE,
  }
}

export const getfinance = (payload) => (dispatch) => {
  dispatch(getfinanceRequest())

  axios
    .get(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?x-rapidapi-key=d1bbb3ce4amsh270932c6708be2fp11788cjsne0703bdbd950&x-rapidapi-host=apidojo-yahoo-finance-v1.p.rapidapi.com&interval=5m&symbol=AMRN&range=1d&region=US`
    )
    .then((res) => {
      dispatch(getfinanceSuccess(res.data.articles))
    })
    .catch((err) => {
      dispatch(getfinanceFailure())
    })
}
