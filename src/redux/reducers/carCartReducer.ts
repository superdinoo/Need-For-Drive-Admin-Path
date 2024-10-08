import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carCartFile: '',
  titleCar: '',
  description: '',
  model: '',
  typeAuto: '',
  color: '',
  isFixDataCarCart: false,
}

const apiTokenReducer = createSlice({
  name: 'carCartInput',
  initialState,
  reducers: {
    setCarCartInput(state, action) {
      state[action.payload.field] = action.payload.value
    },
    setFixCarCart(state) {
      state.isFixDataCarCart = true
    },
    resetFixCarCart(state) {
      state.isFixDataCarCart = false
    },
  },
})

export const { setCarCartInput, setFixCarCart, resetFixCarCart } =
  apiTokenReducer.actions

export default apiTokenReducer.reducer
