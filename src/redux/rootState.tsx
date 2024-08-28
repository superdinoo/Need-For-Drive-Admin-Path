import store from './Store'

export type FormRegister = {
  eMail: string
  password: string
  isFixData: boolean
}

export type RootState = ReturnType<typeof store.getState>
