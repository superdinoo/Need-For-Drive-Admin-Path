import { createSelector } from '@reduxjs/toolkit'
import { CarApi } from 'interface/interface'
import { RootState } from 'redux/rootState'

const selectOneCar = (state: RootState): CarApi => state.orderCar.carOne

const getCarOne = createSelector([selectOneCar], (carOne) => ({
  carOne,
}))

export default getCarOne
