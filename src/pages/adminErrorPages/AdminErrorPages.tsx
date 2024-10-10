import React from 'react'
import {
  AdminFooter,
  AdminHeader,
  AdminMenuLeft,
} from '../../components/adminOrder/index'
import AdminError from '../../components/adminErrorComponents/AdminError'

const AdminErrorPages = () => {
  return (
    <div className="adminOrder">
      <AdminMenuLeft />
      <div className="adminContentError">
        <AdminHeader />
        <AdminError />
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminErrorPages
