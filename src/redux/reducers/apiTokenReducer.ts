import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tokens: null,
}

const apiTokenReducer = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      return {
        ...state,
        tokens: action.payload,
      }
    },
    clearToken: (state) => {
      state.tokens = null
    },
  },
})

export const { setToken, clearToken } = apiTokenReducer.actions

export default apiTokenReducer.reducer
