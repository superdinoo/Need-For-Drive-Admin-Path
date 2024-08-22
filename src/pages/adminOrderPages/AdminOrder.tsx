import React from 'react'
import { useLocation } from 'react-router-dom'
import './AdminOrder.scss'
import {
  AdminFooter,
  AdminCenterOrderCar,
  AdminMenuLeft,
  AdminHeader,
} from '../../components/adminOrder'

const AdminOrder: React.FC = () => {
  const location = useLocation()

  let content: React.ReactNode = ''

  switch (location.pathname) {
    case '/Admin':
      content = 'Карточка автомобиля'
      break
    case '/ListCar':
      content = 'Список автомобилей'
      break
    case '/AdminOrders':
      content = <AdminCenterOrderCar />
      break
    default:
      content = ''
      break
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
