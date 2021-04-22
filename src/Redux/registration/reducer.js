import { loadData } from "../../utils/localStorage";
import { REG_FAILURE, REG_REQUEST, REG_SUCCESS } from "./actionType";

const token = loadData("token");
const initState = {
  isReg: token ? true : false,
  token: token || "",
  isError: false,
  isLoading: false,
};

const regReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REG_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case REG_SUCCESS: {
      return {
        ...state,
        isRege: true,
        token: payload,
        isLoading: false,
      };
    }

    case REG_FAILURE: {
      return {
        ...state,
        isRege: false,
        token: "",
        isLoading: false,
        isError: true,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export { regReducer };
