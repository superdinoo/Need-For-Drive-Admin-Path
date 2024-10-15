import React from 'react'
import './AdminOrder.scss'
import {
  AdminFooter,
  AdminMenuLeft,
  AdminHeader,
} from '../../components/adminOrder'
import RouteRenderer from './path'
import { getRoutes } from './getRoutes'

const AdminOrder: React.FC = () => {
  return (
    <div className="adminOrder">
      <AdminMenuLeft />
      <div className="adminContent">
        <AdminHeader />
        <RouteRenderer routes={getRoutes()} />
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminOrder
