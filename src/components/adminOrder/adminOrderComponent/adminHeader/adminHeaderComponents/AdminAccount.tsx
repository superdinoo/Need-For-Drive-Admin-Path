import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, DropDown } from '../../../../../../public/img/index'

const AdminAccount = () => {
  const [adminDropDown, setAdminDropDown] = useState(false)

  const handleAdminDropDown = () => {
    setAdminDropDown(!adminDropDown)
  }
  return (
    <div className="adminPath">
      <div className="adminMain">
        <img src={Avatar} className="admImg" alt="admin" />
        <p className="admName">Admin</p>
        <div className="adminArrow" onClick={handleAdminDropDown}>
          <button type="button" className="arrowBtn">
            <img src={DropDown} className="arrowImg" alt="arrow" />
          </button>
        </div>
      </div>
      {adminDropDown && (
        <div className="dropDownContainer">
          <div className="dropDownBlock">
            <div className="dropDownBlockBtn">
              <button type="button" className="dropDownSettingBtn">
                Настройки
              </button>
              <Link to="/Authorization">
                <div className="dropDownBlockBtn">
                  <button type="button" className="dropDownSettingBtn">
                    Выйти
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminAccount
