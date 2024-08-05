import store from './Store'

export type FormRegister = {
  eMail: string
  password: string
}

export type RootState = ReturnType<typeof store.getState>
