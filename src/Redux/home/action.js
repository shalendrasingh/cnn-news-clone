import axios from "axios"
import { GET_HOME_FAILURE, GET_HOME_REQUEST, GET_HOME_SUCCESS } from "./actionTypes"

export const get_home_request = () => {
    return {
        type: GET_HOME_REQUEST
    }
}

export const get_home_success = (payload) => {
    return {
        type: GET_HOME_SUCCESS,
        payload
    }
}

export const get_home_failure = () => {
    return {
        type: GET_HOME_FAILURE
    }
}

export const get_home = payload => dispatch => {
    dispatch(get_home_request())
    axios.get("https://newsapi.org/v2/everything?q=world&apiKey=d760d21fb0cb454981fd168c2ad26cf0")
        .then(res => dispatch(get_home_success(res.data.articles)))
        .catch(err => dispatch(get_home_failure()))
}