import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'redux/rootState'

const selectEMail = (state: RootState) => state.register.eMail
const selectPassword = (state: RootState) => state.register.password
const selectFixData = (state: RootState) => state.register.isFixData

const getRegisterInfo = createSelector(
  [selectEMail, selectPassword, selectFixData],
  (eMail, password, isFixData) => ({
    eMail,
    password,
    isFixData,
  }),
)

export default getRegisterInfo
