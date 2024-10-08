import React, { useEffect } from 'react'
import {
  AdminFooter,
  AdminHeader,
  AdminMenuLeft,
} from '../../components/adminOrder/index'
import AdminCartMain from '../../components/adminCartComponents/AdminCartMain'

import getCarCart from '../../components/adminCartComponents/selectCarDataInput'
import AdminModalWindow from '../../components/adminCartComponents/adminModalWindow/AdminModalWindow'
import { useSelector } from 'react-redux'

const AdminCartPages: React.FC = () => {
  const { fixDataCarCart } = useSelector(getCarCart)

  return (
    <div className="adminOrder">
      <AdminMenuLeft />
      <div className="adminContent">
        <AdminHeader />
        {fixDataCarCart && <AdminModalWindow />}
        <AdminCartMain />
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminCartPages
