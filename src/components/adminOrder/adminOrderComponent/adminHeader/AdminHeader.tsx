import React from 'react'
import './AdminHeader.scss'
import {
  AdminAccount,
  AdminBell,
  AdminInput,
} from './adminHeaderComponents/index'

const AdminHeader: React.FC = () => {
  return (
    <div className="adminHeaderContainer">
      <div className="adminHeaderMain">
        <AdminInput />
        <AdminBell />
        <AdminAccount />
      </div>
    </div>
  )
}

export default AdminHeader
