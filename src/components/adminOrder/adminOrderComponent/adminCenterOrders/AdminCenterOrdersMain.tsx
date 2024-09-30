import React from 'react'
import './AdminCenterOrdersMain.scss'
import { AdminCenterInfoCar, AdminPagination } from './index'
import { useCarDataPagination } from '../../../hooks/index'
import AdminSkeletFilter from '../../../adminSkeletFilter/AdminSkeletFilter'
import { items } from '../constants'

const AdminCenter: React.FC = () => {
  const { handlePageChange, totalPage, currentPage, carsSizePage } =
    useCarDataPagination()
  return (
    <div className="adminCenterContainer">
      <h2 className="adminCenterTitle">Заказы</h2>
      <div className="adminCenterMain">
        <AdminSkeletFilter items={items} />
        <AdminCenterInfoCar />
        <AdminPagination
          onChange={handlePageChange}
          total={totalPage * carsSizePage}
          current={currentPage}
          pageSize={carsSizePage}
        />
      </div>
    </div>
  )
}

export default AdminCenter
