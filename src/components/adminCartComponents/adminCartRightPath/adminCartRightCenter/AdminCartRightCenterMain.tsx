import React from 'react'
import './AdminCartRightCenterMain.scss'
import AdminCartRightSkeletInput from './adminCartRightInputsData/adminCartRightSkeletInput/AdminCartRightSkeletInput'
import { useSelector } from 'react-redux'
import selectOneCar from '../../selectCarOne'
import { CarApi } from 'interface/interface'
import { useAdminCarDataCart } from '../../../hooks/index'
import selectOrdersCar from '../../selectCarDataInput'

const AdminCartRightCenterMain: React.FC = () => {
  const { carOne }: { carOne: CarApi } = useSelector(selectOneCar)
  const { handleInputData } = useAdminCarDataCart()
  const { model, typeAuto, color } = useSelector(selectOrdersCar)

  return (
    <div className="adminCartRightCenterMain">
      <div className="adminCartRightCenterContainer">
        <div className="adminCartRightCenterInputs">
          <div className="adminCartRightDataModelContainer">
            <AdminCartRightSkeletInput
              title="Модель автомобиля"
              placeholder={carOne.name}
              name="model"
              value={model}
              onChange={(value: string) => handleInputData('model', value)}
              type="text"
            />
          </div>
          <div className="adminCartRightDataTypeContainer">
            <AdminCartRightSkeletInput
              title="Тип автомобиля"
              placeholder={carOne.categoryId?.description}
              name="typeAuto"
              value={typeAuto}
              onChange={(value: string) => handleInputData('typeAuto', value)}
              type="text"
            />
          </div>
          <div className="adminCartRightColorOptions">
            <AdminCartRightSkeletInput
              title="Доступные цвета"
              placeholder={carOne.colors}
              name="color"
              value={color?.toString()}
              onChange={(value: string) => handleInputData('color', value)}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCartRightCenterMain
