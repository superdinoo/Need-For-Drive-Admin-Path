import apiClient from '../api/apiClient'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchDeleteCarOne = createAsyncThunk(
  'apiSwagger/fetchDeleteCarOne ',
  async (
    carOneData: {
      token: string
      id: string
      name: string
    },
    { rejectWithValue },
  ) => {
    try {
      await apiClient.delete(`/db/order/${carOneData.id}`, {
        headers: {
          'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
          Authorization: `Bearer ${carOneData.token}`,
        },
      })

      const response = await apiClient.delete(
        `/db/car/${carOneData.id}`,

        {
          headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            Authorization: `Bearer ${carOneData.token}`,
          },
        },
      )

      console.log(response.data)
      return response
    } catch (error) {
      console.error('Ошибка при удалении данных списка авто', error)
      return rejectWithValue({ error: 'Failed to load car data' })
    }
  },
)
export default fetchDeleteCarOne
