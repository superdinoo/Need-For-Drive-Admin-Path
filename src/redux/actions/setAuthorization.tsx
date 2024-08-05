import { createAction } from '@reduxjs/toolkit'
import { InputAutRegister } from 'interface/interface'

const setAuthorization = createAction<InputAutRegister>(
  'register/setAuthorization',
)

export default setAuthorization
