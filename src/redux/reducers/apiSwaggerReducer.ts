import { createSlice } from '@reduxjs/toolkit'
import apiSwaggerPromise from '../actions/apiSwaggerPromise'
import fetchAuth from '../thunks/fetchAuth'
import { ApiSwaggerState } from '../../interface/interface'
import fetchDeleteCarOne from '../thunks/fetchDeleteCarOne'
import fetchPostCarCart from '../thunks/fetchPostCarCart'
import fetchPutCarOne from '../thunks/fetchPutCarOne'
import fetchCarData from '../thunks/fetchCarData'
import fetchCarMass from '../thunks/fetchCarsMass'
import fetchLogAut from '../thunks/fetchLogAut'

const initialState: ApiSwaggerState = {
  token: [],
  orderCar: [],
  carsMain: [],
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
    apiSwaggerPromise(fetchCarMass, 'carsMain')(builder)
    apiSwaggerPromise(fetchDeleteCarOne, 'carsMain')(builder)
    apiSwaggerPromise(fetchPostCarCart, 'carsMain')(builder)
    apiSwaggerPromise(fetchPutCarOne, 'carsMain')(builder)
  },
})

export default apiSwaggerSlice.reducer
