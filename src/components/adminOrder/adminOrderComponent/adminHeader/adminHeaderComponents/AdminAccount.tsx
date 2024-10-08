import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, DropDown } from '../../../../../../public/img/index'
import { useDispatch } from 'react-redux'
import fetchLogAut from '../../../../../redux/thunks/fetchLogAut'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'redux/rootState'
import { Action } from 'redux'

const AdminAccount = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const [adminDropDown, setAdminDropDown] = useState(false)

  const handleAdminDropDown = () => {
    setAdminDropDown(!adminDropDown)
  }

  const handleLogout = async () => {
    try {
      dispatch(fetchLogAut())
    } catch (error) {
      console.log('токен не удален')
    }
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
              <Link to="/">
                <div className="dropDownBlockBtn">
                  <button
                    type="button"
                    className="dropDownSettingBtn"
                    onClick={handleLogout}
                  >
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
