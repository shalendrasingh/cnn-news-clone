import axios from "axios"
import { GET_SPORTS_FAILURE, GET_SPORTS_REQUEST, GET_SPORTS_SUCCESS } from "./actionTypes"

export const get_sports_request = () => {
    return {
        type: GET_SPORTS_REQUEST
    }
}

export const get_sports_success = (payload) => {
    return {
        type: GET_SPORTS_SUCCESS,
        payload
    }
}

export const get_sports_failure = () => {
    return {
        type: GET_SPORTS_FAILURE
    }
}

export const get_sports = payload => dispatch => {
    dispatch(get_sports_request())
    axios.get(`https://newsapi.org/v2/everything?language=en&q=sports&apiKey=${process.env.REACT_APP_UNSPLASH_KEY}`)
        .then(res =>dispatch(get_sports_success(res.data.articles)))
        .catch(err => dispatch(get_sports_failure()))
}