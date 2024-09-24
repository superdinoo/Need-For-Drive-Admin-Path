import React, { useState } from 'react'
import { Shape } from '../../../../../../public/img/index'

const AdminInput = () => {
  const [adminInput, setAdminInput] = useState('')

  const handleAdminInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminInput(e.target.value)
  }
  return (
    <div className="adminForm">
      <input
        className="adminInput"
        placeholder="Поиск..."
        value={adminInput}
        onChange={handleAdminInput}
      />
      <img src={Shape} className="adminInputImg" alt="loupe" />
    </div>
  )
}

export default AdminInput
