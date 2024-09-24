import React from 'react'
import './AdminCenterHeader.scss'
import AdminSkeletFilter from '../../../../adminSkeletFilter/AdminSkeletFilter'

const AdminCenterHeader: React.FC = () => {
  return (
    <AdminSkeletFilter
      items={[
        { id: 1234567890, name: 'Длительность' },
        { id: 112, name: 'Название авто' },
        {
          id: 113,
          name: 'Город',
        },
        { id: 114, name: 'Статус' },
      ]}
    />
  )
}

export default AdminCenterHeader
