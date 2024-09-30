import React from 'react'
import AdminListCars from '../../components/adminListCars/AdminListCars'
import { AdminCenterOrderCar } from '../../components/adminOrder/'

export const getRoutes = () => [
  { path: '/Admin', content: 'Карточка автомобиля' },
  { path: '/ListCar', content: <AdminListCars /> },
  { path: '/AdminOrders', content: <AdminCenterOrderCar /> },
]
