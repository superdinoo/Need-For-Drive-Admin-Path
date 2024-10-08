import React from 'react'
import './AdminCartLeftMain.scss'
import AdminCartHeader from './adminCartHeaderLeft/AdminCartHeader'
import AdminCartCenterLeft from '../adminCartLeftPath/adminCartCenterLeft/AdminCartCenterLeft'
import AdminCartFooter from './adminCartFooterLeft/AdminCartFooter'

const AdminCartLeftMain: React.FC = () => {
  return (
    <div className="adminLeftPathMain">
      <div className="adminLeftPathContainer">
        <AdminCartHeader />
        <AdminCartCenterLeft />
        <AdminCartFooter />
      </div>
    </div>
  )
}

export default AdminCartLeftMain
