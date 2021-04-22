import {
  GET_FINANCE_REQUEST,
  GET_FINANCE_SUCCESS,
  GET_FINANCE_FAILURE,
} from './actionType'

const initState = {
  isLoading: false,
  isError: false,
  finance: [],
}

const FinanceReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_FINANCE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }

    case GET_FINANCE_SUCCESS: {
      return {
        ...state,
        finance: payload,
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

export { FinanceReducer }
