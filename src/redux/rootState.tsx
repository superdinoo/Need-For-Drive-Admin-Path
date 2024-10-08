import { OrderApiPost } from 'interface/interface'
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
}

export type CarsMain = {
  carsMain: OrderApiPost[]
}

export type RootState = ReturnType<typeof store.getState>
