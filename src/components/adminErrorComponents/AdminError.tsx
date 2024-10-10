import React from 'react'
import './AdminError.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'redux/rootState'

const AdminError = () => {
  const nvigate = useNavigate()
  const error = useSelector((state: RootState) => state.error)

  const handleBack = () => {
    if (error.error) {
      nvigate(-1)
    }
  }

  return (
    <div className="adminErrorMain">
      <div className="adminErrorContainer">
        <h4 className="adminErrorNumber">{error.error}</h4>
        <h3 className="adminErrorText">Что то пошло не так</h3>
        <p className="adminErrorRestarte">Попробуйте перезагрузить страницу</p>
        <div className="buttonErrorMain">
          <button onClick={handleBack} className="bntError">
            Назад
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminError
