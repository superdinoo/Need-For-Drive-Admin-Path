import React from 'react'
import './AdminCenterInfoCar.scss'
import { CarApi } from 'interface/interface'
import {
  AdminInfoButtonCars,
  AdminInfoCarOptions,
  AdminInfoSoftOptions,
} from './adminCenterInfoPath'
import { useSelector } from 'react-redux'
import { selectFilterOrderCars } from './selectorsOrdersCars'

const AdminCenterInfoCar: React.FC = () => {
  const dataFilterCar = useSelector(selectFilterOrderCars)

  return (
    <div className="adminCenterInfoCarContainer">
      {dataFilterCar.map((cartCars: CarApi) => (
        <div className="adminCenterInfoCarContainerLine">
          <AdminInfoCarOptions dataCars={cartCars} />
          <AdminInfoSoftOptions dataCars={cartCars} />
          <div className="adminInfoCarPrice">
            <h2 className="infoPrice">{cartCars.price} ₽</h2>
          </div>
          <AdminInfoButtonCars />
        </div>
      ))}
    </div>
  )
}

export default AdminCenterInfoCar
