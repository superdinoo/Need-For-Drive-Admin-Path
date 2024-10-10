import { createStructuredSelector } from 'reselect'
import { RootState } from 'redux/rootState'

const selectOrderCar = (state: RootState) => state.carCart

const getCarCart = createStructuredSelector({
  description: (state) => selectOrderCar(state).description,
  color: (state) => selectOrderCar(state).color,
  model: (state) => selectOrderCar(state).model,
  carCartFile: (state) => selectOrderCar(state).carCartFile,
  typeAuto: (state) => selectOrderCar(state).typeAuto,
  fixDataCarCart: (state) => selectOrderCar(state).isFixDataCarCart,
  titleCar: (state) => selectOrderCar(state).titleCar,
})

export default getCarCart
