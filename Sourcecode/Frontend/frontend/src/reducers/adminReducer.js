import {
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_FAIL,
  USER_ADD_RESET,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  USER_FETCH_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  SELLER_ADD_REQUEST,
  SELLER_ADD_SUCCESS,
  SELLER_ADD_FAIL,
  SELLER_ADD_RESET,
  SELLER_FETCH_REQUEST,
  SELLER_FETCH_SUCCESS,
  SELLER_FETCH_FAIL,
  SELLER_FETCH_RESET,
  CATEGORY_ADD_REQUEST,
  CATEGORY_ADD_SUCCESS,
  CATEGORY_ADD_FAIL,
  CATEGORY_ADD_RESET,
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_FETCH_FAIL,
  CATEGORY_FETCH_RESET,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_RESET,
} from '../constants/adminConstants'

export const addUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_REQUEST:
      return { loading: true }
    case USER_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_ADD_FAIL:
      return { loading: false, error: action.payload }
    case USER_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return { loading: true }
    case USER_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case USER_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true }
    case USER_DELETE_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const addSellerReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_ADD_REQUEST:
      return { loading: true }
    case SELLER_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case SELLER_ADD_FAIL:
      return { loading: false, error: action.payload }
    case SELLER_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchSellerReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_FETCH_REQUEST:
      return { loading: true }
    case SELLER_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case SELLER_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case SELLER_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const addCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_ADD_REQUEST:
      return { loading: true }
    case CATEGORY_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case CATEGORY_ADD_FAIL:
      return { loading: false, error: action.payload }
    case CATEGORY_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_FETCH_REQUEST:
      return { loading: true }
    case CATEGORY_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case CATEGORY_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case CATEGORY_FETCH_RESET:
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
