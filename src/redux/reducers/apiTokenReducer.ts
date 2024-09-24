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
    setClearToken: (state) => {
      return {
        ...state,
        tokens: null,
      }
    },
  },
})

export const { setToken, setClearToken } = apiTokenReducer.actions

export default apiTokenReducer.reducer
