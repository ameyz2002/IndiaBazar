import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  userSignupReducer,
  userSigninReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import { addProductReducer } from './reducers/storemgrReducer'

import {
  addUsersReducer,
  fetchUsersReducer,
  addSellerReducer,
  fetchSellerReducer,
  addCategoryReducer,
  fetchCategoryReducer,
  fetchProductReducer,
} from './reducers/adminReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  fetchAddressReducer,
  addAddressReducer,
  addBankReducer,
  fetchBankReducer,
  fetchCartItemListReducer,
  fetchOrderListReducer,
} from './reducers/customerReducer'

import { fetchOrderReducer } from './reducers/ordermgrReducer'

// combined reducers
const reducers = combineReducers({
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  addUsers: addUsersReducer,
  users: fetchUsersReducer,
  addSellers: addSellerReducer,
  sellers: fetchSellerReducer,
  addCategory: addCategoryReducer,
  category: fetchCategoryReducer,
  products: fetchProductReducer,
  addproducts: addProductReducer,
  addaddress: addAddressReducer,
  address: fetchAddressReducer,
  addbank: addBankReducer,
  bank: fetchBankReducer,
  userupdate: userUpdateReducer,
  cartitemlist: fetchCartItemListReducer,
  orderList: fetchOrderListReducer,
  orderDetailedList: fetchOrderReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
