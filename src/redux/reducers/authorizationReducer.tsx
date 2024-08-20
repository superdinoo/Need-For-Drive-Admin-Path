import { createReducer } from '@reduxjs/toolkit'
import setAuthorization from '../actions/setAuthorization'

const initialState = {
  eMail: '',
  password: '',
}

const authorizationReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAuthorization, (state, action) => {
    return {
      ...state,
      eMail: action.payload.eMail,
      password: action.payload.password,
    }
  })
})

export default authorizationReducer
