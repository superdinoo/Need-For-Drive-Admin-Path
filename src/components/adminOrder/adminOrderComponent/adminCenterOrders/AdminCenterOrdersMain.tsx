import React from 'react'
import './AdminCenterOrdersMain.scss'
import { AdminCenterInfoCar, AdminPagination } from './index'
import { usePagination } from '../../../hooks/index'
import AdminSkeletFilter from '../../../adminSkeletFilter/AdminSkeletFilter'
import { items } from '../constants'
import fetchCarData from '../../../../redux/thunks/fetchCarData'

const AdminCenter: React.FC = () => {
  const { carsSizePage, currentPage, handlePageChange, totalPage } =
    usePagination({
      fetchFunction: fetchCarData,
      carsSizePage: 3,
    })

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
