import React, { useEffect, useState } from 'react'
import './AdminPagination.scss'
import { Pagination } from 'antd'
import usePaginations from './usePaginations'

const AdminPagination: React.FC = () => {
  const { carsSizePage, currentPage, handlePageChange, totalPage } =
    usePaginations()

  return (
    <div className="adminPaginationContainer">
      <Pagination
        onChange={handlePageChange}
        total={totalPage * carsSizePage}
        current={currentPage}
        pageSize={carsSizePage}
      />
    </div>
  )
}

export default AdminPagination
