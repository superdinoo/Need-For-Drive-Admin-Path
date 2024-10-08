import apiClient from '../api/apiClient'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchPutCarOne = createAsyncThunk(
  'apiSwagger/fetchPutCarOne',
  async (
    carOneData: {
      token: string
      id: string
      thumbnai: string
      description: string
      colors: string
      name: string
      categoryId: string
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await apiClient.put(
        `/db/car/${carOneData.id}`,
        {
          name: carOneData.name,
          thumbnail: { path: carOneData.thumbnai },
          description: carOneData.description,
          categoryId: { name: carOneData.categoryId },
          colors: carOneData.colors,
        },
        {
          headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            Authorization: `Bearer ${carOneData.token}`,
          },
        },
      )

      return response
    } catch (error) {
      console.error('Ошибка при изменении данных списка авто', error)
      return rejectWithValue({ error: 'Failed to load car data' })
    }
  },
)
export default fetchPutCarOne
