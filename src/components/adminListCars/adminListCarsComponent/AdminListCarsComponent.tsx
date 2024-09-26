import React from 'react'
import './AdminListCarsComponent.scss'
import { AdminListCarsHeader, AdminListCarsTable } from './index'
import { AdminPagination } from '../../adminOrder/adminOrderComponent/adminCenterOrders/index'
import usePaginations from '../../adminOrder/adminOrderComponent/adminCenterOrders/adminPagination/usePaginations'

const AdminListCarsComponent: React.FC = () => {
  const { totalPage, carsSizePage, currentPage, handlePageChange } =
    usePaginations()

  return (
    <div className="adminCenterMain">
      <AdminListCarsHeader />
      <AdminListCarsTable />
      <AdminPagination
        onChange={handlePageChange}
        total={totalPage.totalCarsMass * carsSizePage}
        current={currentPage.currentCarsMass}
        pageSize={carsSizePage}
      />
    </div>
  )
}

export default AdminListCarsComponent
