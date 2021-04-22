import {
  GET_ENTERTAINMENT_FAILURE,
  GET_ENTERTAINMENT_REQUEST,
  GET_ENTERTAINMENT_SUCCESS,
  ADD_ENTERTAINMENT_REQUEST,
  ADD_ENTERTAINMENT_SUCCESS,
  ADD_ENTERTAINMENT_FAILURE,
  EDIT_ENTERTAINMENT_FAILURE,
  EDIT_ENTERTAINMENT_SUCCESS,
  EDIT_ENTERTAINMENT_REQUEST,
  DELETE_ENTERTAINMENT_REQUEST,
  DELETE_ENTERTAINMENT_SUCCESS,
  DELETE_ENTERTAINMENT_FAILURE,
} from './actionType'

const initState = {
  isLoading: false,
  isError: false,
  entertainmentNews: [],
}

const EntertainmentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ENTERTAINMENT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }

    case GET_ENTERTAINMENT_SUCCESS: {
      return {
        ...state,
        entertainmentNews: payload,

        isLoading: false,
      }
    }

    case GET_ENTERTAINMENT_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      }
    }
    //Adding
    case ADD_ENTERTAINMENT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }

    case ADD_ENTERTAINMENT_SUCCESS: {
      return {
        ...state,
        entertainmentNews: [...state.entertainmentNews, payload],

        isLoading: false,
      }
    }

    case ADD_ENTERTAINMENT_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      }
    }
    case EDIT_ENTERTAINMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      }

    case EDIT_ENTERTAINMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }

    case EDIT_ENTERTAINMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    case DELETE_ENTERTAINMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      }

    case DELETE_ENTERTAINMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }

    case DELETE_ENTERTAINMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    default:
      return {
        ...state,
      }
  }
}

export { EntertainmentReducer }
