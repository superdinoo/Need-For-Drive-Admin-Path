import { combineReducers } from '@reduxjs/toolkit'
import authorizationReducer from './authorizationReducer'
import apiTokenReducer from './apiTokenReducer'
import apiOrderData from './apiOrderData'

const rootReducer = combineReducers({
  register: authorizationReducer,
  token: apiTokenReducer,
  orderCar: apiOrderData,
})

export default rootReducer
