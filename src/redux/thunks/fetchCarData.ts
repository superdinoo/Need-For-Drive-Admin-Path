import apiClient from '../api/apiClient'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setOrderData } from '../reducers/apiOrderData'

const fetchCarData = createAsyncThunk(
  'apiSwagger/fetchCarData',
  async (
    tokenData: {
      token: string
      carsSizePage: number
      currentPage: number
    },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await apiClient.get(
        `/db/order?page=${tokenData.currentPage}&limit=${tokenData.carsSizePage}`,
        {
          headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            Authorization: `Bearer ${tokenData.token}`,
          },
        },
      )
      const totalCount = response.data.count

      dispatch(setOrderData(response.data.data))
      return { totalCount, data: response.data.data }
    } catch (error) {
      console.error('Ошибка при загрузке данных авто', error)
      return rejectWithValue({ error: 'Failed to load car data' })
    }
  },
)
export default fetchCarData
