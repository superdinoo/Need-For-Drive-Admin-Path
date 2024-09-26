import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listCars: [],
  filteredCarsMass: [],
}

const carsMass = createSlice({
  name: 'carsMain',
  initialState,
  reducers: {
    setCarsMain: (state, action) => {
      return {
        ...state,
        listCars: action.payload,
        filteredCarsMass: action.payload,
      }
    },
    setFilteredCarsMass: (state, action) => {
      return {
        ...state,
        filteredCarsMass: action.payload,
      }
    },
  },
})

export const { setCarsMain, setFilteredCarsMass } = carsMass.actions

export default carsMass.reducer
