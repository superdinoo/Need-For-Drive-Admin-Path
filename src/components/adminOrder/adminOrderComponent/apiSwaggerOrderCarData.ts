import { useEffect, useState } from 'react'
import axios from 'axios'
import { CarApi } from 'interface/interface'
import { useSelector } from 'react-redux'
import { selectTokensApi } from './selectorsToken'
import apiClient from '../../../redux/api/apiClient'

const apiSwaggerOrderCarData = () => {
  const [dataMain, setDataMain] = useState<CarApi>([])
  const token = useSelector(selectTokensApi)

  console.log(token)

  const fetchCarData = async () => {
    try {
      const response = await apiClient.get(
        `https://frontend-study.simbirsoft.dev/api/db/order`,
        {
          headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log(response.data)
      setDataMain(response.data)
    } catch (error) {
      console.error('Ошибка при загрузке данных', error)
    }
  }

  return { fetchCarData, dataMain }
}

export default apiSwaggerOrderCarData
