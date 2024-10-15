import { createSelector } from '@reduxjs/toolkit'

export const selectCarsMass = (state: { carsMain: { listCars: any } }) =>
  state.carsMain?.listCars

export const selectFilterCarsMass = (state: {
  carsMain: { filteredCarsMass: any }
}) => state.carsMain?.filteredCarsMass

export const getCarsMain = createSelector(
  [selectCarsMass, selectFilterCarsMass],
  (listCars, filteredCarsMass) => ({
    listCars,
    filteredCarsMass,
  }),
)
