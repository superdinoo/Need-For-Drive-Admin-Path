import React from 'react'
import './AdminCenterOrdersMain.scss'
import { AdminCenterHeader, AdminCenterInfoCar, AdminPagination } from './index'

const AdminCenter: React.FC = () => {
  return (
    <div className="adminCenterContainer">
      <h2 className="adminCenterTitle">Заказы</h2>
      <div className="adminCenterMain">
        <AdminCenterHeader />
        <AdminCenterInfoCar />
        <AdminPagination />
      </div>
    </div>
  )
}

export default AdminCenter
