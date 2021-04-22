import axios from "axios"
import { GET_HEALTH_FAILURE, GET_HEALTH_REQUEST, GET_HEALTH_SUCCESS } from "./actionTypes"

export const get_health_request = () => {
    return {
        type: GET_HEALTH_REQUEST
    }
}

export const get_health_success = (payload) => {
    return {
        type: GET_HEALTH_SUCCESS,
        payload
    }
}

export const get_health_failure = () => {
    return {
        type: GET_HEALTH_FAILURE
    }
}

export const get_health = payload => dispatch => {
    dispatch(get_health_request())
    axios.get(`https://newsapi.org/v2/everything?q=health&apiKey=d760d21fb0cb454981fd168c2ad26cf0`)
        .then(res => dispatch(get_health_success(res.data.articles)))
        .catch(err => dispatch(get_health_failure()))
}

