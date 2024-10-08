import React, { useState } from 'react'
import classNames from 'classnames'
import './AdminCartRightSkeletInput.scss'
import { CarApi, DataSkelet } from 'interface/interface'
import { GoPlus } from 'react-icons/go'
import { useSelector } from 'react-redux'
import selectOneCar from '../../../../selectCarOne'

const AdminCartRightSkeletInput: React.FC<DataSkelet> = ({
  title,
  placeholder,
  name,
  onChange,
  type,
  value,
}) => {
  const { carOne }: { carOne: CarApi } = useSelector(selectOneCar)

  const [checkBox, setCheckBox] = useState(false)

  const handleCheckBox = () => {
    setCheckBox(!checkBox)
  }

  return (
    <div className="adminSkeletRightMain">
      <div className="adminSkeletrightContainer">
        <div className="adminTitleSkeletContainer">
          <p className="adminTitleSkeletText">{title}</p>
        </div>
        <div
          className={classNames('adminSkeletRightInputConatiner', {
            adminSkeletRightInputConatinerColor: name === 'color',
          })}
        >
          <input
            className={classNames('adminSkeletInputRight', {
              adminSkeletInputRightColor: name === 'color',
              adminCartHeaderTitle: name === 'titleCar',
              adminCartHeaderReject: value !== undefined && value.length <= 5,
            })}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
            value={value || ''}
          />

          {name === 'color' && (
            <div className="adminSkeletColorPlus">
              <button
                className={classNames('adminSkeletColorContainerPlus', {
                  adminSkeletColorContainerPlusActive: checkBox == true,
                })}
                onClick={handleCheckBox}
              >
                <GoPlus size={25} color="grey" />
              </button>
            </div>
          )}

          {checkBox && (
            <div className="check" key={carOne.id}>
              <p>
                {Array.isArray(carOne.colors)
                  ? carOne.colors.map((colorMas: string) => (
                      <span key={colorMas}>
                        <input type="checkBox" />
                        <span className="checkBoxTextAdmin">{colorMas}</span>
                      </span>
                    ))
                  : null}
              </p>
            </div>
          )}
          {value !== undefined && value.length <= 5 && name !== 'titleCar' && (
            <div className="textError">
              <p className="tetErrorP">Введите корректные данные</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminCartRightSkeletInput
