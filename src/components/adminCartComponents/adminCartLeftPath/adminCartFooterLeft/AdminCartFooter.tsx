import React from 'react'
import './AdminCartFooter.scss'
import { useAdminCarDataCart } from '../../../hooks/index'
import { useSelector } from 'react-redux'
import selectOrdersCar from '../../selectCarDataInput'

const AdminCartFooter: React.FC = () => {
  const { handleInputData } = useAdminCarDataCart()

  const { description } = useSelector(selectOrdersCar)

  return (
    <div className="adminCartFooterMain">
      <div className="adminCartFooterContainer">
        <div className="adminCartFooterTitle">
          <p className="adminCartFooterTxt">Описание</p>
        </div>
        <div className="adminCartFooterDescription">
          <textarea
            className="adminCartFooterTextDesc"
            value={description}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputData('description', event.target.value)
            }
          />
        </div>
      </div>
    </div>
  )
}

export default AdminCartFooter
