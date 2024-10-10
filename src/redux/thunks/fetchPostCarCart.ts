import apiClient from '../api/apiClient'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchPostCarCart = createAsyncThunk(
  'apiSwagger/fetchPostCarCart ',
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
      const response = await apiClient.post(
        `/db/car`,
        {
          priceMax: 100000,
          priceMin: 50000,
          name: carOneData.name,
          thumbnail: {
            path: carOneData.thumbnai,
          },
          description: carOneData.description,
          categoryId: {
            id: 1,
          },
          colors: carOneData.colors,
          carId: carOneData.id,
        },
        {
          headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            Authorization: `Bearer ${carOneData.token}`,
          },
        },
      )
      console.log(carOneData.id)
      return response
    } catch (error) {
      console.error('Ошибка при создании данных списка авто', error)
      return rejectWithValue({ error: 'Failed to load car data' })
    }
  },
)
export default fetchPostCarCart
