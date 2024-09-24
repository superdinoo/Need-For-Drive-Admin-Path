import axios from 'axios'
import Cookies from 'js-cookie'

const apiClient = axios.create({
  baseURL: 'https://frontend-study.simbirsoft.dev/api',
})

apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get('access_token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    config.headers['X-Api-Factory-Application-Id'] = '5e25c641099b810b946c5d5b'
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default apiClient
