
import { GET_SPORTS_FAILURE, GET_SPORTS_REQUEST, GET_SPORTS_SUCCESS } from "./actionTypes"
const initState = {
    sportsNews: [],
    isLoading: false,
    error: false
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_SPORTS_REQUEST: 
            return {
                ...state,
                isLoading: true,
                error: false
            }

        case GET_SPORTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sportsNews: payload
            }

        case GET_SPORTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true 
            }

        default: return state
    }
}