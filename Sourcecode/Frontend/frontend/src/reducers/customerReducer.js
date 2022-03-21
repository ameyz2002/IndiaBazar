import {
  ADDRESS_ADD_REQUEST,
  ADDRESS_ADD_SUCCESS,
  ADDRESS_ADD_FAIL,
  ADDRESS_ADD_RESET,
  ADDRESS_FETCH_REQUEST,
  ADDRESS_FETCH_SUCCESS,
  ADDRESS_FETCH_FAIL,
  ADDRESS_FETCH_RESET,
  BANK_ADD_REQUEST,
  BANK_ADD_SUCCESS,
  BANK_ADD_FAIL,
  BANK_ADD_RESET,
  BANK_FETCH_REQUEST,
  BANK_FETCH_SUCCESS,
  BANK_FETCH_FAIL,
  BANK_FETCH_RESET,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_RESET,
  CARTITEMLIST_FETCH_REQUEST,
  CARTITEMLIST_FETCH_SUCCESS,
  CARTITEMLIST_FETCH_FAIL,
  CARTITEMLIST_FETCH_RESET,
  ORDER_FETCH_REQUEST,
  ORDER_FETCH_SUCCESS,
  ORDER_FETCH_FAIL,
  ORDER_FETCH_RESET,
} from '../constants/customerConstants'

export const addAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case ADDRESS_ADD_REQUEST:
      return { loading: true }
    case ADDRESS_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case ADDRESS_ADD_FAIL:
      return { loading: false, error: action.payload }
    case ADDRESS_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case ADDRESS_FETCH_REQUEST:
      return { loading: true }
    case ADDRESS_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case ADDRESS_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case ADDRESS_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const addBankReducer = (state = {}, action) => {
  switch (action.type) {
    case BANK_ADD_REQUEST:
      return { loading: true }
    case BANK_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case BANK_ADD_FAIL:
      return { loading: false, error: action.payload }
    case BANK_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchBankReducer = (state = {}, action) => {
  switch (action.type) {
    case BANK_FETCH_REQUEST:
      return { loading: true }
    case BANK_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case BANK_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case BANK_FETCH_RESET:
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

export const fetchCartItemListReducer = (state = {}, action) => {
  switch (action.type) {
    case CARTITEMLIST_FETCH_REQUEST:
      return { loading: true }
    case CARTITEMLIST_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case CARTITEMLIST_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case CARTITEMLIST_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const fetchOrderListReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_FETCH_REQUEST:
      return { loading: true }
    case ORDER_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case ORDER_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case ORDER_FETCH_RESET:
      return {}
    default:
      return state
  }
}
