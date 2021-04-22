import { GET_HOME_FAILURE, GET_HOME_REQUEST, GET_HOME_SUCCESS } from "./actionTypes"

const initState = {
    homeNews: [],
    isLoading: false,
    error: false
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_HOME_REQUEST: 
            return {
                ...state,
                isLoading: true,
                error: false
            }

        case GET_HOME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                homeNews: payload
            }

        case GET_HOME_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true 
            }

        default: return state
    }
}