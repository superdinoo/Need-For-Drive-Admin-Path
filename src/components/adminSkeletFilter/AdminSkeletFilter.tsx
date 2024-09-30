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

const AdminSkeletFilter: React.FC<AdminSkelet> = ({ items }) => {
  const dataCars = useSelector(selectOrdersCar)
  const [fixColor, setFixColor] = useState<string | string>('')
  const { reset } = useSelector(selectButtonFilter)
  const { clickList, handleClickList, handleClickFilterCars } = useAdminSkelet()

  const handleFixColor = (itemString: string) => {
    setFixColor(itemString)
  }

  const renderClickListContent = (itemName: string) => {
    return dataCars.map((dataCar: CarApi) => {
      let listText = ''

      switch (itemName) {
        case 'Название авто':
          listText = dataCar.carId.name
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
              {clickList[item.id] && (
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
