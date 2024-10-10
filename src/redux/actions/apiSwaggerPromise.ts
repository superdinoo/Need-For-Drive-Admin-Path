import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit'
import { ApiSwagger, CarsMain, OrderCar, RootState } from '../rootState'
import { ApiSwaggerState, Token } from '../../interface/interface'

type ThunkType = AsyncThunk<
  Token[] | OrderCar[] | CarsMain | ApiSwagger,
  string | void | undefined | Error,
  { state: RootState }
>

const apiSwaggerPromise =
  (thunk: ThunkType, paramName: 'token' | 'orderCar' | 'carsMain') =>
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
      .addCase(thunk.rejected, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error.message as string | null,
      }))
  }

export default apiSwaggerPromise
