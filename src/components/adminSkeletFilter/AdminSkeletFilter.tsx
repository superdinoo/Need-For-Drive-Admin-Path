import React, { useState } from 'react'
import './AdminSkeletFilter.scss'
import { TbArrowsMoveVertical } from 'react-icons/tb'
import { AdminSkelet, CarApi } from '../../interface/interface'
import { useSelector } from 'react-redux'
import useAdminSkelet from './useAdminSkelet'
import {
  selectButtonFilter,
  selectOrdersCar,
} from '../adminOrder/adminOrderComponent/adminCenterOrders/adminCenterInfoCar/selectorsOrdersCars'
import AdminSkeletFilterButton from './AdminSkeletFilterButton'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { selectCarsMass } from '../adminListCars/adminListCarsComponent/selectorsCarsMass'

const AdminSkeletFilter: React.FC<AdminSkelet> = ({ items }) => {
  const location = useLocation()
  const dataCars = useSelector(selectOrdersCar)
  const dataCarsMass = useSelector(selectCarsMass)
  const [fixColor, setFixColor] = useState<string | string>('')
  const { reset } = useSelector(selectButtonFilter)
  const { clickList, handleClickList, handleClickFilterCars } = useAdminSkelet()

  const handleFixColor = (itemString: string) => {
    setFixColor(itemString)
  }

  const renderClickListContent = (itemName: string) => {
    const dataCarsToRender =
      location.pathname === '/ListCar' ? dataCarsMass : dataCars

    return dataCarsToRender.map((dataCar: CarApi) => {
      let listText = ''

      switch (itemName) {
        case 'Название авто':
          listText =
            location.pathname === '/ListCar' ? dataCar.name : dataCar.carId.name
          break
        case 'Категория':
          listText = dataCar.categoryId.name
          break
        case 'Город':
          listText = dataCar.cityId.name
          break
        case 'Длительность':
          listText = dataCar.rateId.price
          if (listText === '1100') {
            listText = 'Сутки'
          } else if (listText === '3200') {
            listText = 'Неделя'
          } else {
            listText = 'Месяц'
          }
          break
        case 'Статус':
          listText = dataCar.orderStatusId?.name
          if (listText === null) {
            listText = 'Статус не определен'
          }
          break
        default:
          listText = ''
      }

      return (
        <div onClick={() => handleFixColor(listText)}>
          <button
            className={classNames('buttonListFilterCar', {
              buttonListFilterCarActive:
                fixColor === listText && reset === false,
            })}
            key={`${dataCar.id}-${itemName}`}
            onClick={() => handleClickFilterCars(itemName, listText)}
          >
            {listText}
          </button>
        </div>
      )
    })
  }

  return (
    <div className="adminCenterBlock">
      <div className="adminCenterBlockHeaderContainer">
        <div className="adminCenterRateSetting">
          {items.map((item) => (
            <div className="adminMainBtnContainer" key={item.id}>
              <div className="adminCenterRate">
                <p className="titleAdminHeaderCenter">{item.name}</p>
                <TbArrowsMoveVertical
                  onClick={() => handleClickList(item.id)}
                />
              </div>
              {clickList[
                location.pathname === '/ListCar'
                  ? 'carsMassClick'
                  : 'carDataClick'
              ][item.id] && (
                <div className="clickListOpen">
                  {renderClickListContent(item.name)}
                </div>
              )}
            </div>
          ))}
        </div>
        <AdminSkeletFilterButton />
      </div>
    </div>
  )
}

export default AdminSkeletFilter
