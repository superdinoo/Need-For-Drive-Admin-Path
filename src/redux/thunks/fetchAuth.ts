import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import apiClient from '../api/apiClient'
import { setToken } from '../reducers/apiTokenReducer'

const fetchAuth = createAsyncThunk(
  'apiSwagger/fetchAuth',
  async (
    userData: { eMail: string; password: string },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await apiClient.post('/auth/login', {
        username: userData.eMail,
        password: userData.password,
      })

      const token = response.data.access_token

      dispatch(setToken(token))

      Cookies.set('access_token', token, {
        secure: true,
        sameSite: 'strict',
      })

      return token
    } catch (error) {
      console.error('Ошибка при загрузке данных', error)
      return rejectWithValue(error)
    }
  },
)

export default fetchAuth
