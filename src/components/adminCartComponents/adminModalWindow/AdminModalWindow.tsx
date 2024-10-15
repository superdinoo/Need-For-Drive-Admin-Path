import React, { useState } from 'react'
import './AdminModalWindow.scss'
import { Compleated, Cross } from '../../../../public/img/index'

const AdminModalWindow = () => {
  const [modalState, setModalState] = useState(false)

  const handleModal = () => {
    setModalState(!modalState)
  }

  return (
    <div
      className={
        modalState ? 'adminModalWindowMainFalse' : 'adminModalWindowMain'
      }
    >
      <div className="adminModalWindowContainer">
        <div className="adminModalLeftPath">
          <img src={Compleated} className="compleated" alt="compleated" />
          <p className="compleatedTextArea">Успех! Машина сохранена</p>
        </div>
        <div className="adminModalRightPath">
          <button className="btnCross" onClick={handleModal}>
            <img src={Cross} className="cross" alt="cross" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminModalWindow
