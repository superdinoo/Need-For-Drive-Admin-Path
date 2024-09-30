import React, { useState } from 'react'
import { Notifications } from '../../../../../../public/img/index'

const AdminBell = () => {
  const [adminCount, setAdminCount] = useState(0)

  const handleAdminCount = () => {
    setAdminCount(adminCount + 1)
  }
  return (
    <div className="adminPush">
      <img src={Notifications} className="bell" alt="bell" />
      <div className="counterBell">
        <div className="countNumber" onClick={handleAdminCount}>
          {adminCount}
        </div>
      </div>
    </div>
  )
}

export default AdminBell
