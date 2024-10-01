import React from 'react'
import './AdminListCarsComponent.scss'
import { AdminListCarsHeader, AdminListCarsTable } from './index'
import { AdminPagination } from '../../adminOrder/adminOrderComponent/adminCenterOrders/index'
import { useCarMassPagination } from '../../hooks/index'

const AdminListCarsComponent: React.FC = () => {
  const { handlePageChange, totalPage, carsSizePage, currentPage } =
    useCarMassPagination()

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
