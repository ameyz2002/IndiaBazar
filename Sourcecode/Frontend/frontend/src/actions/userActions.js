import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_UPDATE_REQUEST, 
  USER_UPDATE_SUCCESS, 
  USER_UPDATE_FAIL
} from '../constants/userConstants'
import axios from 'axios'

export const signup = (firstName, lastName, email, mobile, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      firstName,
      lastName,
      email,
      mobile,
      password,
    }
    const url = 'http://localhost:8080/indiabazaar/users/register'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      email,
      password,
    }
    const url = 'http://localhost:8080/indiabazaar/users/signin'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}

export const updateProfile = (firstName, lastName, email,password, mobile, userId) => {
  return (dispatch) => {
    dispatch({
      type: USER_UPDATE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      firstName,
      lastName,
      email,
      password,
      mobile,
    }
    const url = 'http://localhost:8080/indiabazaar/users/updateProfile'
    axios
      .put(url + '/'+ userId, body, header)
      .then((response) => {
        dispatch({
          type: USER_UPDATE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_UPDATE_FAIL,
          payload: error,
        })
      })
  }
}
