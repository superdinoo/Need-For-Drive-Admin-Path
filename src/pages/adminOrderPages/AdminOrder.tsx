import React from 'react'
import { useLocation } from 'react-router-dom'
import './AdminOrder.scss'
import {
  AdminFooter,
  AdminCenterOrderCar,
  AdminMenuLeft,
  AdminHeader,
} from '../../components/adminOrder'
import AdminListCars from '../../components/adminListCars/AdminListCars'

const AdminOrder: React.FC = () => {
  const routes = [
    { path: '/Admin', content: 'Карточка автомобиля' },
    { path: '/ListCar', content: <AdminListCars /> },
    { path: '/AdminOrders', content: <AdminCenterOrderCar /> },
  ]
  const location = useLocation()

  let content: React.ReactNode = ''

  const route = routes.find(
    (routeContent) => routeContent.path === location.pathname,
  )

  if (route) {
    content = route.content
  }

  return (
    <div className="adminOrder">
      <AdminMenuLeft />
      <div className="adminContent">
        <AdminHeader />
        {content}
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminOrder
