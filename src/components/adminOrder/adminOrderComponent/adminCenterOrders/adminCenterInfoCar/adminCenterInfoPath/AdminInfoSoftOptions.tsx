import React from 'react'
import { AdminInfoCarOptionsProps } from '../../../../../../interface/interface'
import AdminSkeletSoftOptions from './AdminSkeletSoftOptions'

const AdminInfoSoftOptions: React.FC<AdminInfoCarOptionsProps> = ({
  dataCars,
}) => {
  const items = [
    { id: 1, name: 'Полный бак', value: dataCars.isFullTank },
    { id: 2, name: 'Детское кресло', value: dataCars.isNeedChildChair },
    { id: 3, name: 'Правый руль', value: dataCars.isRightWheel },
  ]

  return (
    <div className="centerPathAdmin">
      <AdminSkeletSoftOptions items={items} />
    </div>
  )
}

export default AdminInfoSoftOptions
