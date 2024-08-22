import React, { useState } from 'react'
import './AdminSkeletFilter.scss'
import { TbArrowsMoveVertical } from 'react-icons/tb'
import { AdminSkelet, CarApi } from '../../interface/interface'
import { useSelector } from 'react-redux'
import useAdminSkelet from './useAdminSkelet'

const AdminSkeletFilter: React.FC<AdminSkelet> = ({ items }) => {
  const { clickList, handleClickList, handleClickFilterCars } = useAdminSkelet()
  // const renderClickListContent = (itemName: string) => {
  //   return dataCars.map((dataCar: CarApi) => {
  //     let listText = ''
  //     switch (itemName) {
  //       case 'Название авто':
  //         listText = dataCar.name
  //         break
  //       case 'Категория':
  //         listText = dataCar.categoryId.name
  //         break
  //       default:
  //         listText = ''
  //     }
  //     return (
  //       <button
  //         className="buttonListFilterCar"
  //         key={dataCar.id}
  //         onClick={() => handleClickFilterCars(itemName, listText)}
  //       >
  //         {listText}
  //       </button>
  //     )
  //   })
  // }
  return (
    <div className="adminCenterBlock">
      <div className="adminCenterBlockHeaderContainer">
        <div className="adminCenterRateSetting">
          {items.map((item) => (
            <div className="adminMainBtnContainer">
              <div className="adminCenterRate" key={item.id}>
                <p className="titleAdminHeaderCenter">{item.name}</p>
                <TbArrowsMoveVertical
                  onClick={() => handleClickList(item.id)}
                />
              </div>
              {clickList[item.id] && (
                <div key={item.id} className="clickListOpen">
                  {renderClickListContent(item.name)}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="adminListCenterBtnContainer">
          <div className="adminListCenterFirstBtn">
            <button className="adminFirstBtnCenter">Сброс</button>
          </div>
          <div className="adminListCenterSecondBtn">
            <button className="adminSecondBtnCenter">Применить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSkeletFilter
