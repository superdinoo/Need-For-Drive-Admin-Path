import React from 'react'
import './AdminCartRightFooter.scss'
import AdminSkeletButtonFooter from './adminCartRightButtonFooter/AdminSkeletButtonFooter'

const AdminCartRightFooter = () => {
  return (
    <div className="adminCartRightFooter">
      <div className="adminCartRightFooterContainer">
        <div className="adminCartRightcontainerSecond">
          <div className="adminCartRightSaveFooter">
            <AdminSkeletButtonFooter name="Сохранить" />
          </div>
          <div className="adminCartRightRejectFooterr">
            <AdminSkeletButtonFooter name="Отменить" />
          </div>
        </div>
        <div className="adminCartRightDelet">
          <AdminSkeletButtonFooter name="Удалить" />
        </div>
      </div>
    </div>
  )
}

export default AdminCartRightFooter
