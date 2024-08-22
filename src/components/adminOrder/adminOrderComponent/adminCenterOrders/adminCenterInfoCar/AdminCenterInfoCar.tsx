import React, { useEffect } from 'react'
import './AdminCenterInfoCar.scss'
import {
  CheckIcon,
  RejectIcon,
  EditIcon,
  Car1,
} from '../../../../../../public/img/index'
import apiSwaggerOrderCarData from '../../apiSwaggerOrderCarData'
import { selectTokensApi } from '../../selectorsToken'
import { useSelector } from 'react-redux'

const AdminCenterInfoCar: React.FC = () => {
  const { fetchCarData, dataMain } = apiSwaggerOrderCarData()
  const token = useSelector(selectTokensApi)

  useEffect(() => {
    fetchCarData()
    console.log(dataMain)
  }, [token, dataMain])
  return (
    <div className="adminCenterInfoCarContainer">
      <div className="adminCenterInfoCarContainerLine">
        <div className="adminInfoCar">
          <img src={Car1} className="imageCarInfoImg" alt="car1" />
        </div>
        <div className="adminInfoCarBlockDate">
          <div className="settingLine">
            <div className="firstLineBlock">
              <p className="adminInfoCarBlockName">
                ELANTRA <span className="paragraff">в </span>Ульяновск,
                <span className="paragraff"> Нариманова 42</span>
              </p>
            </div>
            <div className="secondLineBlock">
              <p className="adminInfoRateDate">
                12.06.2019 12:00 - 13.06.2019 12:00
              </p>
            </div>
            <div className="threeLineBlock">
              <p className="adminInfoColorDate">
                <span className="paragraff">Цвет: </span> Голубой
              </p>
            </div>
          </div>
        </div>
        <div className="centerPathAdmin">Тут доп опции</div>
        <div className="adminInfoCarPrice">
          <h2 className="infoPrice">4 300 ₽</h2>
        </div>
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
      </div>
    </div>
  )
}

export default AdminCenterInfoCar
