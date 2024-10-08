import React from 'react'
import './AdminListCarsComponent.scss'
import { AdminListCarsHeader, AdminListCarsTable } from './index'
import { AdminPagination } from '../../adminOrder/adminOrderComponent/adminCenterOrders/index'
import { usePagination } from '../../hooks/index'
import fetchCarMass from '../../../redux/thunks/fetchCarsMass'

const AdminListCarsComponent: React.FC = () => {
  const { carsSizePage, currentPage, handlePageChange, totalPage } =
    usePagination({
      fetchFunction: fetchCarMass,
      carsSizePage: 3,
    })

  return (
    <div className="adminCenterMain">
      <AdminListCarsHeader />
      <AdminListCarsTable />
      <AdminPagination
        onChange={handlePageChange}
        total={totalPage * carsSizePage}
        current={currentPage}
        pageSize={carsSizePage}
      />
    </div>
  )
}

export default AdminListCarsComponent
