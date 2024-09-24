import React from 'react'
import './AdminFooter.scss'
import { Link } from 'react-router-dom'

const AdminFooter: React.FC = () => {
  return (
    <div className="adminFooterContainer">
      <div className="adminFooterMain">
        <div className="adminFooterLeft">
          <Link to="/HomePage">
            <p className="firstTitleFooterAdmin">Главная страница</p>
          </Link>
        </div>
        <div className="adminFooterRight">
          <p className="nameCompany">Copyright © 2020 Simbirsoft</p>
        </div>
      </div>
    </div>
  )
}

export default AdminFooter
