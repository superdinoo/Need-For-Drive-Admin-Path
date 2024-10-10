import React from 'react'
import AdminListCars from '../../components/adminListCars/AdminListCars'
import { AdminCenterOrderCar } from '../../components/adminOrder/'
import AdminCartMain from '../../components/adminCartComponents/AdminCartMain'

export const getRoutes = () => [
  { path: '/AdminCart', content: <AdminCartMain /> },
  { path: '/ListCar', content: <AdminListCars /> },
  { path: '/AdminOrders', content: <AdminCenterOrderCar /> },
]
