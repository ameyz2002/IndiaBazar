import {
  ORDERLIST_FETCH_REQUEST,
  ORDERLIST_FETCH_SUCCESS,
  ORDERLIST_FETCH_FAIL,
} from '../constants/ordermgrConstants'
import axios from 'axios'

export const getAllOrders = () => {
  return (dispatch) => {
    dispatch({
      type: ORDERLIST_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/indiabazaar/orderMgr/detailOrderList'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: ORDERLIST_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ORDERLIST_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
