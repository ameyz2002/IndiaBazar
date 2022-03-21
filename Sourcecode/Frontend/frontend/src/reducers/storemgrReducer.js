import {
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_RESET,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_RESET,
}from '../constants/storemgrConstants'

export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_ADD_REQUEST:
        return { loading: true }
      case PRODUCT_ADD_SUCCESS:
        return { loading: false, response: action.payload }
      case PRODUCT_ADD_FAIL:
        return { loading: false, error: action.payload }
      case PRODUCT_ADD_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const fetchProductReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_FETCH_REQUEST:
        return { loading: true }
      case PRODUCT_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case PRODUCT_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case PRODUCT_FETCH_RESET:
        return {}
      default:
        return state
    }
  }