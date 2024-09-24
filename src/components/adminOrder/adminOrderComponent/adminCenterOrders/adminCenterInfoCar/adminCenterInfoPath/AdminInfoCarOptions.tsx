import React from 'react'
import { AdminInfoCarOptionsProps } from '../../../../../../interface/interface'
import adminDateFrom from './adminDateFromTo'

const AdminInfoCarOptions: React.FC<AdminInfoCarOptionsProps> = ({
  dataCars,
}) => {
  const { start, end } = adminDateFrom({ dataCars })

  return (
    <>
      <div className="adminInfoCar">
        <img
          src={dataCars.carId.thumbnail.path}
          className="imageCarInfoImg"
          alt="car1"
        />
      </div>
      <div className="adminInfoCarBlockDate">
        <div className="settingLine">
          <div className="firstLineBlock">
            <p className="adminInfoCarBlockName">
              {dataCars.carId.name} <span className="paragraff">в </span>
              {dataCars.cityId.name},
              <span className="paragraff"> {dataCars.pointId.name}</span>
            </p>
          </div>
          <div className="secondLineBlock">
            <p className="adminInfoRateDate">
              {start} - {end}
            </p>
          </div>
          <div className="threeLineBlock">
            <p className="adminInfoColorDate">
              <span className="paragraff">Цвет: </span> {dataCars.color}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminInfoCarOptions
