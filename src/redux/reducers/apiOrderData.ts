import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carData: [],
  filteredCarsData: [],
  buttonChange: {
    reset: false,
    apply: false,
  },
  carOne: [],
}

const apiOrderData = createSlice({
  name: 'orderCar',
  initialState,
  reducers: {
    setOrderData: (state, action) => {
      return {
        ...state,
        carData: action.payload,
        filteredCarsData: action.payload,
      }
    },
    setFilteredCarsData: (state, action) => {
      return {
        ...state,
        filteredCarsData: action.payload,
      }
    },

    setButtonFilter: (state, action) => {
      return {
        ...state,
        buttonChange: {
          reset: action.payload === 'apply' ? false : !state.buttonChange.reset,
          apply: action.payload === 'reset' ? false : !state.buttonChange.apply,
        },
      }
    },
    setCarOne: (state, action) => {
      return {
        ...state,
        carOne: action.payload,
      }
    },
  },
})

export const { setOrderData, setFilteredCarsData, setButtonFilter, setCarOne } =
  apiOrderData.actions

export default apiOrderData.reducer
