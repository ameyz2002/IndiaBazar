import {
  ORDERLIST_FETCH_REQUEST,
  ORDERLIST_FETCH_SUCCESS,
  ORDERLIST_FETCH_FAIL,
  ORDERLIST_FETCH_RESET,
} from '../constants/ordermgrConstants'

export const fetchOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDERLIST_FETCH_REQUEST:
      return { loading: true }
    case ORDERLIST_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case ORDERLIST_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case ORDERLIST_FETCH_RESET:
      return {}
    default:
      return state
  }
}
