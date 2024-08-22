import { combineReducers } from '@reduxjs/toolkit'
import authorizationReducer from './authorizationReducer'
import apiTokenReducer from './apiTokenReducer'

const rootReducer = combineReducers({
  register: authorizationReducer,
  token: apiTokenReducer,
})

export default rootReducer
