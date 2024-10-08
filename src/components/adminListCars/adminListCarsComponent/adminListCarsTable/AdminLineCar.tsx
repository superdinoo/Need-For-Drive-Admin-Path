import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectFilterCarsMass } from '../selectorsCarsMass'
import { CarApi } from 'interface/interface'
import { CiSettings } from 'react-icons/ci'
import { useAdminCarDataCart } from '../../../hooks/index'

const AdminLineCar = () => {
  const dataCars = useSelector(selectFilterCarsMass)
  const { handleDataCar } = useAdminCarDataCart()

  return (
    <>
      {dataCars.map((carLine: CarApi) => (
        <div className="adminTableLine" key={carLine.id}>
          <div className="columnOne">
            <img
              src={carLine.thumbnail.path}
              className="columnImg"
              alt="автомобиль"
            />
          </div>
          <div className="columnTwo">
            <p className="columnTwoTxt">{carLine.name}</p>
          </div>
          <div className="columnThree">
            <p className="columnThreeTxt">{carLine.categoryId.name}</p>
          </div>
          <div className="columnFour">
            <p className="columnFourTxt">{carLine.colors}</p>
          </div>
          <div className="columnFive">
            <p className="columnFiveTxt">{carLine.priceMin} рублей</p>
            <div className="settingColumn">
              <button
                className="settingColumnButton"
                key={carLine.carId?.toString()}
                onClick={() => handleDataCar(carLine)}
              >
                <CiSettings size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default AdminLineCar
