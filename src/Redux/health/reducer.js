import { GET_HEALTH_FAILURE, GET_HEALTH_REQUEST, GET_HEALTH_SUCCESS } from "./actionTypes"

const initState = {
    healthNews: [],
    isLoading: false,
    error: false
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_HEALTH_REQUEST: 
            return {
                ...state,
                isLoading: true,
                error: false
            }

        case GET_HEALTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                healthNews: payload
            }

        case GET_HEALTH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true 
            }

        default: return state
    }
}