import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

const WorldReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    }

    case GET_DATA_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export { WorldReducer };
