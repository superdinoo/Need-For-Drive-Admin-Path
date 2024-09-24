import React from 'react'
import {
  CheckIcon,
  RejectIcon,
  EditIcon,
} from '../../../../../../../public/img/index'

const AdminInfoButtonCars: React.FC = () => {
  return (
    <div className="adminInfoCarBlockBtn">
      <div className="btnfirstInfo">
        <img src={CheckIcon} className="imageCarInfo" alt="check" />
        <button type="button" className="btnDone">
          Готово
        </button>
      </div>
      <div className="btnfirstInfo">
        <img src={RejectIcon} className="imageCarInfo" alt="reject" />
        <button type="button" className="btnDone">
          Отмена
        </button>
      </div>
      <div className="btnfirstInfo">
        <img src={EditIcon} className="imageCarInfo" alt="edit" />
        <button type="button" className="btnDone">
          Изменить
        </button>
      </div>
    </div>
  )
}

export default AdminInfoButtonCars
