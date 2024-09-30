import { setCarsMain } from '../reducers/carsListReducer'
import apiClient from '../api/apiClient'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchCarMass = createAsyncThunk(
  'apiSwagger/fetchCarMass',
  async (
    carsData: {
      token: string
      carsSizePage: number
      currentPage: number
    },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await apiClient.get(
        `/db/car?page=${carsData.currentPage}&limit=${carsData.carsSizePage}`,
        {
          headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            Authorization: `Bearer ${carsData.token}`,
          },
        },
      )
      const totalCount = response.data.count

      dispatch(setCarsMain(response.data.data))
      return { totalCount, data: response.data.data }
    } catch (error) {
      console.error('Ошибка при загрузке данных списка авто', error)
      return rejectWithValue({ error: 'Failed to load car data' })
    }
  },
)
export default fetchCarMass
