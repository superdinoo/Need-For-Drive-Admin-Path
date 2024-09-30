import { createSelector } from '@reduxjs/toolkit'

export const selectTokensApi = (state: { token: { tokens: any } }) =>
  state.token.tokens

export const getRegisterInfo = createSelector([selectTokensApi], (tokens) => ({
  tokens,
}))
export default getRegisterInfo
