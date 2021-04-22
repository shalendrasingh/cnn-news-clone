import axios from "axios"
import { NAV_DROP_MENU, SEARCH_DATA_REQUEST,  SEARCH_REQUEST_FAILURE, SEARCH_REQUEST_SUCCESS } from "./actionType"

const searchDataRequest = () => {
    return {
        type:SEARCH_DATA_REQUEST,
    }
}

const SearchRequestSuccess = (payload) => {
    return {
        type:SEARCH_REQUEST_SUCCESS,
        payload
    }
}

const searchRequestFailure = () => {
    return {
        type:SEARCH_REQUEST_FAILURE
    }
}

const navDropMenu = () => {
    return {
        type: NAV_DROP_MENU
    }
}
const getSearchData = (payload) => (dispatch) => {
    dispatch(searchDataRequest());
    return axios.get(`http://newsapi.org/v2/everything?q=${payload}&from=2021-03-10&sortBy=publishedAt&apiKey=afb0ad80492b485db131d463da513064`)
    .then((res) => {
        dispatch(SearchRequestSuccess(res.data.articles))
    })
    .catch(err => dispatch(searchRequestFailure()))
}

// const getArticle = (url, payload) => (dispatch) => {
//     dispatch(dataRequest());
//     return axios.get(`${url}/${payload}`)
//     .then((res) => {
//         console.log(res.data.articles)
//         dispatch(SearchRequestSuccess(res.data.articles))
//     })
//     .catch(err => dispatch(searchRequestFailure()))
// }

export {getSearchData, navDropMenu}
