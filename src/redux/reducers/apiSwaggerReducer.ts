import { createSlice } from '@reduxjs/toolkit'
import apiSwaggerPromise from '../actions/apiSwaggerPromise'
import fetchAuth from '../thunks/fetchAuth'
import { ApiSwaggerState } from '../../interface/interface'

const initialState: ApiSwaggerState = {
  token: [],
  isLoading: false,
  error: null,
}

const apiSwaggerSlice = createSlice({
  name: 'apiSwagger',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    apiSwaggerPromise(fetchAuth, 'token')(builder)
  },
})

export default apiSwaggerSlice.reducer
