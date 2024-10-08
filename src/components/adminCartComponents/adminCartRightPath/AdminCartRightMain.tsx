import React from 'react'
import './AdminCartRightMain.scss'
import AdminCartRightHeader from './adminCartRightHeader/AdminCartRightHeader'
import AdminCartRightCenterMain from './adminCartRightCenter/AdminCartRightCenterMain'
import AdminCartRightFooter from './adminCartRightFooter/AdminCartRightFooter'

const AdminCartRightMain = () => {
  return (
    <div className="adminRightMain">
      <div className="adminRightContainer">
        <AdminCartRightHeader />
        <AdminCartRightCenterMain />
        <AdminCartRightFooter />
      </div>
    </div>
  )
}

export default AdminCartRightMain
