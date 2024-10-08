import React from 'react'
import AdminSkeletFilter from '../../../adminSkeletFilter/AdminSkeletFilter'

const AdminListCarsHeader: React.FC = () => {
  return (
    <AdminSkeletFilter
      items={[
        { id: 5, name: 'Название авто' },
        { id: 6, name: 'Категория' },
      ]}
    />
  )
}

export default AdminListCarsHeader
