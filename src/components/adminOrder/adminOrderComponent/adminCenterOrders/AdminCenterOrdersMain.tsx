import React from 'react'
import './AdminCenterOrdersMain.scss'
import { AdminCenterHeader, AdminCenterInfoCar, AdminPagination } from './index'
import usePaginations from './adminPagination/usePaginations'

const AdminCenter: React.FC = () => {
  const { totalPage, carsSizePage, currentPage, handlePageChange } =
    usePaginations()

  return (
    <div className="adminCenterContainer">
      <h2 className="adminCenterTitle">Заказы</h2>
      <div className="adminCenterMain">
        <AdminCenterHeader />
        <AdminCenterInfoCar />
        <AdminPagination
          onChange={handlePageChange}
          total={totalPage.totalCarData * carsSizePage}
          current={currentPage.currentCarData}
          pageSize={carsSizePage}
        />
      </div>
    </div>
  )
}

export default AdminCenter
