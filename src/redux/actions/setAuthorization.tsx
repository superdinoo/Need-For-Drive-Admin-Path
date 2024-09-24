import { createAction } from '@reduxjs/toolkit'
import { InputAutRegister } from 'interface/interface'

export const setAuthorization = createAction<InputAutRegister>(
  'register/setAuthorization',
)

export const fixData = createAction('register/fixData')
