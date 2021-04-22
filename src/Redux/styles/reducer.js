import { DATA_REQUEST, DROP_MENU, REQUEST_FAILURE, REQUEST_SUCCESS } from "./actionType"


const initialState = {
    data:[],
    isLoading: false,
    menu:false,
    isError: null
}

const StyleReducer = (state=initialState,{type, payload}) => {
    switch (type) {
        case DATA_REQUEST: 
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                data: payload
            };
        case REQUEST_FAILURE: 
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case DROP_MENU:
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

export {StyleReducer}