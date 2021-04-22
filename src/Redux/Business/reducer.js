import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_FINANCE_FAILURE,
  GET_FINANCE_SUCCESS,
  GET_HEADLINES_REQUEST,
} from './actionType'

const initState = {
  isLoading: false,
  isError: false,
  businessNews: [],

  headlinesNews: [],
}

const BusinessReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }

    case GET_DATA_SUCCESS: {
      return {
        ...state,
        businessNews: payload,

        isLoading: false,
      }
    }

    case GET_DATA_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      }
    }

    default:
      return {
        ...state,
      }
  }
}

const HeadlinesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_HEADLINES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }

    case GET_FINANCE_SUCCESS: {
      console.log(state)
      return {
        ...state,
        headlinesNews: payload,

        isLoading: false,
      }
    }

    case GET_FINANCE_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      }
    }

    default:
      return {
        ...state,
      }
  }
}

export { BusinessReducer, HeadlinesReducer }
