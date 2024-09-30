import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import apiClient from '../api/apiClient'
import { setClearToken } from '../reducers/apiTokenReducer'

const fetchLogAut = createAsyncThunk(
  'apiSwagger/fetchLogAut',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const token = Cookies.get('access_token')

      if (token) {
        const response = await apiClient.post('/auth/logout', {
          Authorization: `Bearer ${token}`,
        })

        Cookies.remove('access_token')
        dispatch(setClearToken())
      }
    } catch (error) {
      console.error('Ошибка при выходе из системы', error)
      return rejectWithValue(error)
    }
  },
)

export default fetchLogAut
