import { createSelector } from '@reduxjs/toolkit'

export const selectOrdersCar = (state: { orderCar: { carData: any } }) =>
  state.orderCar.carData

export const selectFilterOrderCars = (state: {
  orderCar: { filteredCarsData: any }
  filteredCarsData: any
}) => state.orderCar.filteredCarsData

export const selectButtonFilter = (state: {
  orderCar: { buttonChange: { reset: boolean; apply: boolean } }
}) => state.orderCar.buttonChange

export const getOrdersCars = createSelector(
  [selectOrdersCar, selectFilterOrderCars, selectButtonFilter],
  (carData, filteredCarsData, buttonChange) => ({
    carData,
    filteredCarsData,
    reset: buttonChange.reset,
    apply: buttonChange.apply,
  }),
)

export default getOrdersCars
