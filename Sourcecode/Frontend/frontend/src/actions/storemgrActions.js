import {
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_FAIL,
    PRODUCT_FETCH_REQUEST,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_FAIL,
  } from '../constants/storemgrConstants'
  import axios from 'axios'

  export const addProduct = (productName, description,quantity,price,discount,categoryId,sellerId) => {
    return (dispatch) => {
      dispatch({
        type: PRODUCT_ADD_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const body = {
        productName,
        description,
        quantity,
        price,
        discount
      }
      const url = 'http://localhost:8080/indiabazaar/storeMgr/addProduct'
      axios
        .post(url + '/' + categoryId + '/' + sellerId, body, header)
        .then((response) => {
          dispatch({
            type: PRODUCT_ADD_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: PRODUCT_ADD_FAIL,
            payload: error,
          })
        })
    }
  }
  
 
  export const getProduct = () => {
    return (dispatch) => {
      dispatch({
        type: PRODUCT_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const url = 'http://localhost:8080/indiabazaar/storeMgr/productList'
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