import React from 'react'
import './AdminListCarsTable.scss'
import AdminLineCar from './AdminLineCar'

const AdminListCarsTable = () => {
  return (
    <div className="adminListCarsTableContainer">
      <div className="adminTableLineHeader">
        <div className="columnOne">
          <h5 className="columnOneHeader">Картинка</h5>
        </div>
        <div className="columnTwo">
          <h5 className="columnTwoHeader">Название</h5>
        </div>
        <div className="columnThree">
          <h5 className="columnThreeHeader">Категория</h5>
        </div>
        <div className="columnFour">
          <h5 className="columnFourHeader">Расцветка</h5>
        </div>
        <div className="columnFive">
          <h5 className="columnFiveHeader">Начальная стоимость</h5>
        </div>
      </div>
      <AdminLineCar />
    </div>
  )
}

export default AdminListCarsTable
