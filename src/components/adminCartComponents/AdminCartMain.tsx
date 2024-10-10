import React from 'react'
import './AdminCartMain.scss'
import AdminCartLeftMain from './adminCartLeftPath/AdminCartLeftMain'
import AdminCartRightMain from './adminCartRightPath/AdminCartRightMain'

const AdminCartMain: React.FC = () => {
  return (
    <div className="adminCenterContainer">
      <h2 className="adminCenterTitle">Карточка автомобиля</h2>
      <div className="adminCenterCart">
        <AdminCartLeftMain />
        <AdminCartRightMain />
      </div>
    </div>
  )
}

export default AdminCartMain
