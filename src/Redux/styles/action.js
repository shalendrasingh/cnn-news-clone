import axios from "axios"
import { DATA_REQUEST, DROP_MENU, REQUEST_FAILURE, REQUEST_SUCCESS } from "./actionType"

const dataRequest = () => {
    return {
        type:DATA_REQUEST
    }
}

const requestSuccess = (payload) => {
    return {
        type:REQUEST_SUCCESS,
        payload
    }
}

const requestFailure = () => {
    return {
        type:REQUEST_FAILURE
    }
}

const dropMenu = (payload) => {
    return {
        type: DROP_MENU
    }
}

const getData = (payload) => (dispatch) => {
    dispatch(dataRequest());
    return axios.get('http://newsapi.org/v2/everything?q=fashion&from=2021-03-10&sortBy=publishedAt&apiKey=afb0ad80492b485db131d463da513064')
    .then((res) => {
        dispatch(requestSuccess(res.data.articles))
    })
    .catch(err => dispatch(requestFailure()))
}

// const getArticle = (url, payload) => (dispatch) => {
//     dispatch(dataRequest());
//     return axios.get(`${url}/${payload}`)
//     .then((res) => {
//         console.log(res.data.articles)
//         dispatch(requestSuccess(res.data.articles))
//     })
//     .catch(err => dispatch(requestFailure()))
// }

export {getData,dropMenu}
