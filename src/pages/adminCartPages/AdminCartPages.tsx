import React from 'react'
import {
  AdminFooter,
  AdminHeader,
  AdminMenuLeft,
} from '../../components/adminOrder/index'
import AdminCartMain from '../../components/adminCartComponents/AdminCartMain'
import getCarCart from '../../components/adminCartComponents/selectCarDataInput'
import AdminModalWindow from '../../components/adminCartComponents/adminModalWindow/AdminModalWindow'
import { useSelector } from 'react-redux'
import AdminError from '../../components/adminErrorComponents/AdminError'
import { RootState } from 'redux/rootState'
import { useLocation } from 'react-router-dom'

const AdminCartPages: React.FC = () => {
  const { fixDataCarCart } = useSelector(getCarCart)

  const error = useSelector((state: RootState) => state.error)
  const location = useLocation()

  return (
    <div className="adminOrder">
      <AdminMenuLeft />
      <div className="adminContent">
        <AdminHeader />
        {fixDataCarCart && <AdminModalWindow />}
        {error.error && location.pathname !== '/ListCar' ? (
          <AdminError />
        ) : (
          <AdminCartMain />
        )}
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminCartPages
