import React from 'react'
import './AdminCenterHeader.scss'
import AdminSkeletFilter from '../../../../adminSkeletFilter/AdminSkeletFilter'

const AdminCenterHeader: React.FC = () => {
  return (
    <AdminSkeletFilter
      items={[
        { id: 1, name: 'Неделя' },
        { id: 2, name: 'Elantra' },
        {
          id: 3,
          name: 'Ульяновск',
        },
        { id: 4, name: 'В процессе' },
      ]}
    />
  )
}

export default AdminCenterHeader
