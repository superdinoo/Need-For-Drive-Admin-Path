import React from 'react'
import './AdminCartCenterLeft.scss'
import { Progress } from 'antd'
import { percentage } from '../../../helpers'

const AdminCartCenterLeft = () => {
  const percentages = percentage()

  return (
    <div className="adminCenterHeaderMain">
      <div className="adminCenterHeaderConatiner">
        <div className="adminLoadingContainer">
          <div className="adminLoadingText">
            <p className="adminLoadingTextFirst">Заполнено</p>
            <p className="adminLoadingTextSecond">{percentages} %</p>
          </div>
          <div className="adminStripeLoading">
            <Progress
              percent={percentages}
              showInfo={false}
              strokeColor="rgba(0, 123, 255, 1)"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCartCenterLeft
