import { CarApi, OrderApiPost } from 'interface/interface'
import store from './Store'

export type FormRegister = {
  eMail: string
  password: string
  isFixData: boolean
}
export type Token = {
  tokens: string
}
export type OrderCar = {
  orderCar: OrderApiPost[]
  carOne: CarApi
}

export type CarsMain = {
  carsMain: OrderApiPost[]
}

export type InputCarCart = {
  model: string
  descriptions: string
  typeAuto: string
  color: string
  file: {}
}
export type ApiSwagger = {
  error: string
}
export type ApiSwaggerState = {
  token: Token
  orderCar: OrderCar
  carsMain: CarsMain
  isLoading: boolean
  error: string
}

export type RootState = ReturnType<typeof store.getState>
