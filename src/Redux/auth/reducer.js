import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionType'

import { loadData, saveData } from '../../utils/localStorage'
const token = loadData('token')
const initState = {
  isAuth: token ? true : false,
  token: token ? token : null,
  username: null,
  isError: false,
  isLoading: false,
  isAdmin: false,
}

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }

    case LOGIN_SUCCESS: {
      const { token, username } = payload

      return {
        ...state,
        isAuth: true,
        token,
        username,

        isLoading: false,
        isError: false,
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: '',
        isLoading: false,
        isError: true,
      }
    }

    default:
      return {
        ...state,
      }
  }
}

export { authReducer }
