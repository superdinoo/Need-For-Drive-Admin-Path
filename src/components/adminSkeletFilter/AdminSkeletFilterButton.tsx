import React from 'react'
import { useDispatch } from 'react-redux'
import { setButtonFilter } from '../../redux/reducers/apiOrderData'
import { useAdminSkelet } from '../hooks/index'
import { Link, useLocation } from 'react-router-dom'

const AdminSkeletFilterButton: React.FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { handleReset } = useAdminSkelet()

  const handleApplyClick = () => {
    dispatch(setButtonFilter('apply'))
  }

  return (
    <div className="adminListCenterBtnContainer">
      <div className="adminListCenterFirstBtn">
        <button className="adminFirstBtnCenter" onClick={handleReset}>
          Сброс
        </button>
      </div>
      <div className="adminListCenterSecondBtn">
        <button className="adminSecondBtnCenter" onClick={handleApplyClick}>
          Применить
        </button>
      </div>
      {location.pathname === '/ListCar' && (
        <Link to="/AdminCart">
          <div className="adminListCenterSecondBtn">
            <button className="adminThirdBtnCenter">Создать</button>
          </div>
        </Link>
      )}
    </div>
  )
}

export default AdminSkeletFilterButton
