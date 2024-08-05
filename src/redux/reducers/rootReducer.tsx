import { combineReducers } from '@reduxjs/toolkit'
import authorizationReducer from './authorizationReducer'

const rootReducer = combineReducers({
  register: authorizationReducer,
})

export default rootReducer
