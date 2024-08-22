import React, { useEffect } from 'react'
import './AutBtn.scss'
import fetchAuth from '../../../redux/thunks/fetchAuth'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'redux/rootState'
import { Action } from 'redux'
import { Link } from 'react-router-dom'
import getRegisterInfo from '../authorizationRegister/selectRegister'

const AutBtn: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const { eMail, password } = useSelector(getRegisterInfo)

  const handleLogin = () => {
    dispatch(fetchAuth())
  }

  return (
    <div className="btnContainerAut">
      <div className="firstBtnContainerAut">
        <button type="button" className="firstBtnAut">
          Запросить доступ
        </button>
      </div>
      <div className="secondBtnContainerAut">
        <Link to={eMail.length > 0 && password.length > 0 ? '/Admin' : ''}>
          <button type="button" className="secondBtnAut" onClick={handleLogin}>
            Войти
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AutBtn
