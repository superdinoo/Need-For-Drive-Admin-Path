import React from 'react'
import { ButtonSkelet } from 'interface/interface'
import './AdminSkeletButtonFooter.scss'
import classNames from 'classnames'
import { useAdminSkeletBtnFooter } from '../../../../hooks/index'

const AdminSkeletButtonFooter: React.FC<ButtonSkelet> = ({ name }) => {
  const { handleButtonCarCart } = useAdminSkeletBtnFooter(name)

  return (
    <div className="adminSkeletButtonFooter">
      <button
        onClick={handleButtonCarCart}
        className={classNames('adminSkeletButtonFooterOptions', {
          adminSkeletButtonFooterBlue: name === 'Сохранить',
          adminSkeletButtonFooterGray: name === 'Отменить',
          adminSkeletButtonFooterRed: name === 'Удалить',
        })}
      >
        {name}
      </button>
    </div>
  )
}

export default AdminSkeletButtonFooter
