import { NAV_DROP_MENU, SEARCH_DATA_REQUEST,  SEARCH_REQUEST_FAILURE, SEARCH_REQUEST_SUCCESS } from "./actionType"


const initialState = {
    data:[],
    isLoading: false,
    menu:false,
    isError: null
}

const SearchReducer = (state=initialState,{type, payload}) => {
    switch (type) {
        case SEARCH_DATA_REQUEST: 
            return {
                ...state,
                isLoading: true
            };
        case SEARCH_REQUEST_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                data: payload
            };
        case SEARCH_REQUEST_FAILURE: 
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case NAV_DROP_MENU:
        return {
            ...state,
            menu: !state.menu,
        }
        default: 
            return {
                ...state
            }
    }
}

export {SearchReducer}