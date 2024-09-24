import React from 'react'
import { Link } from 'react-router-dom'
import './AdminMenuLeft.scss'
import { LogoAut } from '../../../../../public/img/index'
import AdminMenuLeftLine from './AdminMenuLeftLine'

const AdminMenuLeft: React.FC = () => {
  return (
    <div className="adminMenuLeftContainer">
      <div className="adminMenuLeftMain">
        <Link to="https://superdinoo.github.io/Need-for-Drive/">
          <div className="adminMenuLeftlogo">
            <div className="adminHeaderLogo">
              <img src={LogoAut} className="adminImgLogo" alt="logo" />
              <h2 className="adminlogoTxt">Need for drive</h2>
            </div>
          </div>
        </Link>
        <AdminMenuLeftLine />
      </div>
    </div>
  )
}

export default AdminMenuLeft
