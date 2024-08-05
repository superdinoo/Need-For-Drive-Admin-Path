import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'redux/rootState'

const selectEMail = (state: RootState) => state.register.eMail
const selectPassword = (state: RootState) => state.register.password

const getRegisterInfo = createSelector(
  [selectEMail, selectPassword],
  (eMail, password) => ({
    eMail,
    password,
  }),
)

export default getRegisterInfo
