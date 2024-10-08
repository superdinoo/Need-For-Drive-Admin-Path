import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit'
import { OrderCar, RootState } from '../rootState'
import { ApiSwaggerState, Token } from '../../interface/interface'

type ThunkType = AsyncThunk<
  Token[] | OrderCar[],
  string | void | undefined,
  { state: RootState }
>

const apiSwaggerPromise =
  (thunk: ThunkType, paramName: 'token' | 'orderCar') =>
  (builder: ActionReducerMapBuilder<ApiSwaggerState>) => {
    builder
      .addCase(thunk.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(thunk.fulfilled, (state, { payload }) => ({
        ...state,
        [paramName]: payload,
        isLoading: false,
      }))
      .addCase(thunk.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload as string,
      }))
  }

export default apiSwaggerPromise
