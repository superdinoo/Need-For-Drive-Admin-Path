import React from 'react'
import './AdminPagination.scss'
import { Pagination } from 'antd'
import { AdminPaginationProps } from 'interface/interface'

const AdminPagination: React.FC<AdminPaginationProps> = ({
  total,
  current,
  pageSize,
  onChange,
}) => {
  return (
    <div className="adminPaginationContainer">
      <Pagination
        onChange={onChange}
        total={total}
        current={current}
        pageSize={pageSize}
      />
    </div>
  )
}

export default AdminPagination
