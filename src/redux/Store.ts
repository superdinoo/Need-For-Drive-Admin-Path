import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'
import { RootState } from './rootState'

const store = configureStore({
  reducer: rootReducer,
})
export default store

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
