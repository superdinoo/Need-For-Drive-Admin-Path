import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import apiClient from '../api/apiClient'

const fetchAuth = createAsyncThunk(
  'apiSwagger/fetchAuth',
  async (
    userData: { eMail: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await apiClient.post(`/auth/login`, {
        username: userData.eMail,
        password: userData.password,
      })

      const token = response.data.access_token

      Cookies.set('access_token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      })
    } catch (error) {
      console.error('Ошибка при загрузке данных', error)
    }
  },
)

export default fetchAuth
