import {
  ADDRESS_ADD_REQUEST,
  ADDRESS_ADD_SUCCESS,
  ADDRESS_ADD_FAIL,
  ADDRESS_FETCH_REQUEST,
  ADDRESS_FETCH_SUCCESS,
  ADDRESS_FETCH_FAIL,
  BANK_ADD_REQUEST,
  BANK_ADD_SUCCESS,
  BANK_ADD_FAIL,
  BANK_FETCH_REQUEST,
  BANK_FETCH_SUCCESS,
  BANK_FETCH_FAIL,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  CARTITEMLIST_FETCH_REQUEST,
  CARTITEMLIST_FETCH_SUCCESS,
  CARTITEMLIST_FETCH_FAIL,
  ORDER_FETCH_REQUEST,
  ORDER_FETCH_SUCCESS,
  ORDER_FETCH_FAIL,
} from '../constants/customerConstants'
import axios from 'axios'

export const addAddress = (
  area,
  city,
  state,
  country,
  pincode,
  mobile,
  userId
) => {
  return (dispatch) => {
    dispatch({
      type: ADDRESS_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      area,
      city,
      state,
      country,
      pincode,
      mobile,
    }
    const url = 'http://localhost:8080/indiabazaar/users/addAddress'
    axios
      .post(url + '/' + userId, body, header)
      .then((response) => {
        dispatch({
          type: ADDRESS_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADDRESS_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getAddress = (userId) => {
  return (dispatch) => {
    dispatch({
      type: ADDRESS_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/indiabazaar/users/addressList'
    axios
      .get(url + '/' + userId, header)
      .then((response) => {
        dispatch({
          type: ADDRESS_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADDRESS_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const addBank = (ifscCode, accNo, holderName, userId) => {
  return (dispatch) => {
    dispatch({
      type: BANK_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      ifscCode,
      accNo,
      holderName,
    }
    const url = 'http://localhost:8080/indiabazaar/users/addBank'
    axios
      .post(url + '/' + userId, body, header)
      .then((response) => {
        dispatch({
          type: BANK_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: BANK_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getBank = (userId) => {
  return (dispatch) => {
    dispatch({
      type: BANK_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/indiabazaar/users/bankDetailsList'
    axios
      .get(url + '/' + userId, header)
      .then((response) => {
        dispatch({
          type: BANK_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: BANK_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const getProducts = () => {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/indiabazaar/admin/productList'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: PRODUCT_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const getCartItemList = (userId) => {
  return (dispatch) => {
    dispatch({
      type: CARTITEMLIST_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/indiabazaar/customer/cartItemList'
    axios
      .get(url + '/' + userId, header)
      .then((response) => {
        dispatch({
          type: CARTITEMLIST_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: CARTITEMLIST_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const getOrderList = (userId) => {
  return (dispatch) => {
    dispatch({
      type: ORDER_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/indiabazaar/customer/orderList'
    axios
      .get(url + '/' + userId, header)
      .then((response) => {
        dispatch({
          type: ORDER_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ORDER_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
