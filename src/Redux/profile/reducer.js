import {
  GET_PROFILE_DATA_FAILED,
  GET_PROFILE_DATA_REQUEST,
  GET_PROFILE_DATA_SUCCESS,
  GET_USER_DATA_SUCCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  data: null,
};

const ProfileReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_PROFILE_DATA_SUCCESS: {
      let final = [];
      final.push(payload);
      return {
        ...state,
        data: final,
        isLoading: false,
      };
    }
    case GET_PROFILE_DATA_FAILED: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export { ProfileReducer };
