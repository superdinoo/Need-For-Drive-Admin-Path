import React from 'react'
import { useDispatch } from 'react-redux'
import { setButtonFilter } from '../../redux/reducers/apiOrderData'
import useAdminSkelet from './useAdminSkelet'

const AdminSkeletFilterButton: React.FC = () => {
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
    </div>
  )
}

export default AdminSkeletFilterButton
