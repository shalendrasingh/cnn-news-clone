import axios from 'axios'

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

const getEntertainmentRequest = () => {
  return {
    type: GET_ENTERTAINMENT_REQUEST,
  }
}

const getEntertainmentSuccess = (payload) => {
  return {
    type: GET_ENTERTAINMENT_SUCCESS,
    payload,
  }
}

const getEntertainmentFailure = () => {
  return {
    type: GET_ENTERTAINMENT_FAILURE,
  }
}

//Adding the data
const addEntertainmentRequest = () => {
  return {
    type: ADD_ENTERTAINMENT_REQUEST,
  }
}

const addEntertainmentSuccess = (payload) => {
  return {
    type: ADD_ENTERTAINMENT_SUCCESS,
    payload,
  }
}

const addEntertainmentFailure = () => {
  return {
    type: ADD_ENTERTAINMENT_FAILURE,
  }
}
//Edit
// edit todos

export const editEntertainmentRequest = () => {
  return {
    type: EDIT_ENTERTAINMENT_REQUEST,
  }
}

export const editEntertainmentSuccess = (payload) => {
  return {
    type: EDIT_ENTERTAINMENT_SUCCESS,
  }
}

export const editEntertainmentFailure = () => {
  return {
    type: EDIT_ENTERTAINMENT_FAILURE,
  }
}

export const deleteEntertainmentRequest = () => {
  return {
    type: DELETE_ENTERTAINMENT_REQUEST,
  }
}

export const deleteEntertainmentSuccess = (payload) => {
  return {
    type: DELETE_ENTERTAINMENT_SUCCESS,
  }
}

export const deleteEntertainmentFailure = () => {
  return {
    type: DELETE_ENTERTAINMENT_FAILURE,
  }
}

export const getentertainmentAxios = (payload) => (dispatch) => {
  dispatch(getEntertainmentRequest())

  axios
    .get('https://json-server-shrayank.herokuapp.com/entertainment')
    .then((res) => {
      dispatch(getEntertainmentSuccess(res.data))
    })
    .catch((err) => {
      dispatch(getEntertainmentFailure())
    })
}

//Adding
export const add_entertainmentAxios = (payload) => (dispatch) => {
  dispatch(addEntertainmentRequest())
  axios
    .post('https://json-server-shrayank.herokuapp.com/entertainment', payload)
    .then((res) => {
      dispatch(addEntertainmentSuccess(res.data))
      console.log(res.data)
    })
    .catch((err) => {
      dispatch(addEntertainmentFailure())
    })
}

//Edit

export const edit_entertainmentAxios = ({ id, title }) => (dispatch) => {
  dispatch(editEntertainmentRequest())
  return axios
    .patch(`https://json-server-shrayank.herokuapp.com/entertainment/${id}`, {
      title,
    })
    .then((res) => {
      dispatch(editEntertainmentSuccess())
      return { success: true }
    })
    .catch((err) => {
      dispatch(editEntertainmentFailure())
    })
}

// //delete

export const delete_entertainmentAxios = (id) => (dispatch) => {
  // dispatch(deleteEntertainmentRequest())
  // try {
  //   const res = await axios.delete(
  //     `https://json-server-shrayank.herokuapp.com/entertainment/${id}`
  //   )
  //   dispatch(deleteEntertainmentSuccess())
  //   return { success: true }
  // } catch (err) {
  //   dispatch(deleteEntertainmentFailure())
  // }

  // dispatch(deleteEntertainmentRequest())

  axios
    .delete(`https://json-server-shrayank.herokuapp.com/entertainment/${id}`)
    .then((res) => {
      dispatch(deleteEntertainmentSuccess())
      dispatch(getentertainmentAxios())
    })
    .catch((err) => {
      dispatch(deleteEntertainmentFailure())
    })
}
