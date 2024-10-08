import React from 'react'
import './AdminCartHeader.scss'
import { useSelector } from 'react-redux'
import selectOneCar from '../../selectCarOne'
import { CarApi } from 'interface/interface'
import { useAdminCarDataCart } from '../../../hooks/index'
import AdminCartRightSkeletInput from '../../adminCartRightPath/adminCartRightCenter/adminCartRightInputsData/adminCartRightSkeletInput/AdminCartRightSkeletInput'
import selectOrdersCar from '../../selectCarDataInput'

const AdminCartHeader: React.FC = () => {
  const { carOne }: { carOne: CarApi } = useSelector(selectOneCar)
  const { handleFileChange, handleInputData } = useAdminCarDataCart()
  const { titleCar, carCartFile } = useSelector(selectOrdersCar)

  return (
    <div className="adminCartHeaderMain">
      <div className="adminCartHeaderContainer">
        <div className="adminCartHeaderImgContainer">
          <img
            src={carCartFile}
            className="adminCartHaderImg"
            alt="картинка авто"
          />
        </div>
        <h3 className="adminCartHeaderTitle">
          <AdminCartRightSkeletInput
            title=""
            placeholder={carOne.name}
            name="titleCar"
            value={titleCar}
            onChange={(value: string) => handleInputData('titleCar', value)}
            type="text"
          />
        </h3>
        <p className="adminCartHeaderText">{carOne.categoryId?.description}</p>
        <div className="adminCartHeaderFilesContainer">
          <div className="adminCartFilesChoose">Выберите Файл</div>
          <div className="adminCartFilesBtnContainer">
            <input
              type="file"
              accept="image/"
              onChange={(value) => handleFileChange(value)}
              name="file"
              style={{ display: 'none' }}
            />
            <button
              className="adminCartFilesBtn"
              onClick={() => {
                ;(
                  document.querySelector(
                    '.adminCartFilesBtnContainer input[type="file"]',
                  ) as HTMLElement
                )?.click()
              }}
            >
              Обзор
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCartHeader
