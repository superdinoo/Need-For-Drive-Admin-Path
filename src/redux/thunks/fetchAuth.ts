import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import apiClient from '../api/apiClient'
import { setToken } from '../reducers/apiTokenReducer'
import { jwtDecode } from 'jwt-decode'

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

      const decodedToken = jwtDecode(token)
      const expiresAt = decodedToken.exp * 1000

      if (expiresAt < Date.now()) {
        const refreshToken = await apiClient.post('/auth/refresh', {
          Authorization: `Bearer ${token}`,
          refresh_token: Cookies.get('refresh_token'),
        })
        const newToken = refreshToken.data.access_token
        Cookies.set('access_token', newToken, {
          secure: true,
          sameSite: 'strict',
        })
        dispatch(setToken(token))
        return newToken
      } else {
        Cookies.set('access_token', token, {
          secure: true,
          sameSite: 'strict',
        })
        dispatch(setToken(token))
        return token
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных', error)
      return rejectWithValue(error)
    }
  },
)

export default fetchAuth
