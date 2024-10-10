import React from 'react'
import './AdminOrder.scss'
import {
  AdminFooter,
  AdminMenuLeft,
  AdminHeader,
} from '../../components/adminOrder'
import RouteRenderer from './path'
import { getRoutes } from './getRoutes'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/rootState'
import AdminError from '../../components/adminErrorComponents/AdminError'
import { useLocation } from 'react-router-dom'

const AdminOrder: React.FC = () => {
  const error = useSelector((state: RootState) => state.error)
  const location = useLocation()

  return (
    <div className="adminOrder">
      <AdminMenuLeft />
      <div className="adminContent">
        <AdminHeader />
        {error.error && location.pathname !== '/ListCar' ? (
          <div className="adminContentError">
            <AdminError />
          </div>
        ) : (
          <RouteRenderer routes={getRoutes()} />
        )}
        <AdminFooter />
      </div>
    </div>
  )
}
export default AdminOrder
