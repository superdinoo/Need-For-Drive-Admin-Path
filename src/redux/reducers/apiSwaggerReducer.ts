import { createSlice } from '@reduxjs/toolkit'
import apiSwaggerPromise from '../actions/apiSwaggerPromise'
import fetchAuth from '../thunks/fetchAuth'
import { ApiSwaggerState } from '../../interface/interface'

const initialState: ApiSwaggerState = {
  token: [],
  orderCar: [],
  isLoading: false,
  error: null,
}

const apiSwaggerSlice = createSlice({
  name: 'apiSwagger',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    apiSwaggerPromise(fetchAuth, 'token')(builder)
    apiSwaggerPromise(fetchCarData, 'orderCar')(builder)
    apiSwaggerPromise(fetchLogAut, 'token')(builder)
  },
})

export default apiSwaggerSlice.reducer
