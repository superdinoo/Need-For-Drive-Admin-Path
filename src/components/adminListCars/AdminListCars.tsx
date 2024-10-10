import React from 'react'
import './AdminListCars.scss'
import AdminListCarsComponent from './adminListCarsComponent/AdminListCarsComponent'

const AdminListCars: React.FC = () => {
  return (
    <div className="adminCenterContainer">
      <h2 className="adminCenterTitle">Список автомобилей</h2>
      <AdminListCarsComponent />
    </div>
  )
}

export default AdminListCars
