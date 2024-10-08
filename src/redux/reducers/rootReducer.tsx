import { combineReducers } from '@reduxjs/toolkit'
import authorizationReducer from './authorizationReducer'
import apiTokenReducer from './apiTokenReducer'
import apiOrderData from './apiOrderData'
import carsListReducer from './carsListReducer'

const rootReducer = combineReducers({
  register: authorizationReducer,
  token: apiTokenReducer,
  orderCar: apiOrderData,
  carsMain: carsListReducer,
})

export default rootReducer
