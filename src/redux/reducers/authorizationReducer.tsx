import { createReducer } from '@reduxjs/toolkit'
import { fixData, setAuthorization } from '../actions/setAuthorization'

const initialState = {
  eMail: '',
  password: '',
  isFixData: false,
}

const authorizationReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAuthorization, (state, action) => {
    return {
      ...state,
      eMail: action.payload.eMail,
      password: action.payload.password,
    }
  })
  builder.addCase(fixData, (state) => {
    state.isFixData = true
  })
})

export default authorizationReducer
