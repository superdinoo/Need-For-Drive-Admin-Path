import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import apiClient from '../api/apiClient'
import { setToken } from '../reducers/apiTokenReducer'

const fetchAuth = createAsyncThunk(
  'apiSwagger/fetchAuth',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiClient.post(`/auth/login`, {
        username: 'intern',
        password: 'intern-S!',
      })

      const token = response.data.access_token
      console.log(token)
      dispatch(setToken(response.data.access_token))

      Cookies.set('access_token', token, {
        expires: 3600,
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
