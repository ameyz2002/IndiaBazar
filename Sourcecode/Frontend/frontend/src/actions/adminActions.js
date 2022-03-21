import {
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  SELLER_ADD_REQUEST,
  SELLER_ADD_SUCCESS,
  SELLER_ADD_FAIL,
  SELLER_FETCH_REQUEST,
  SELLER_FETCH_SUCCESS,
  SELLER_FETCH_FAIL,
  CATEGORY_ADD_REQUEST,
  CATEGORY_ADD_SUCCESS,
  CATEGORY_ADD_FAIL,
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_FETCH_FAIL,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
} from '../constants/adminConstants'
import axios from 'axios'

export const addUser = (firstName, lastName, email, password, mobile, role) => {
  return (dispatch) => {
    dispatch({
      type: USER_ADD_REQUEST,
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
      role,
    }
    const url = 'http://localhost:8080/indiabazaar/admin/addUser'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getUsers = () => {
  return (dispatch) => {
    dispatch({
      type: USER_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/indiabazaar/admin/userList'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: USER_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const addSeller = (brandName, contact, address) => {
  return (dispatch) => {
    dispatch({
      type: SELLER_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      brandName,
      contact,
      address,
    }
    const url = 'http://localhost:8080/indiabazaar/admin/addSeller'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: SELLER_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: SELLER_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getSellers = () => {
  return (dispatch) => {
    dispatch({
      type: SELLER_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/indiabazaar/admin/sellerList'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: SELLER_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: SELLER_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const addCategory = (catName, description) => {
  return (dispatch) => {
    dispatch({
      type: CATEGORY_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      catName,
      description,
    }
    const url = 'http://localhost:8080/indiabazaar/admin/addCategory'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CATEGORY_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: CATEGORY_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getCategory = () => {
  return (dispatch) => {
    dispatch({
      type: CATEGORY_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/indiabazaar/admin/categoryList'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: CATEGORY_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: CATEGORY_FETCH_FAIL,
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
