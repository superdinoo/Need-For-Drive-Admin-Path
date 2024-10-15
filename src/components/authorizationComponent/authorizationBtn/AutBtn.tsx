import React, { useEffect } from 'react'
import './AutBtn.scss'
import fetchAuth from '../../../redux/thunks/fetchAuth'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'redux/rootState'
import { Action } from 'redux'
import { fixData } from '../../../redux/actions/setAuthorization'
import getRegisterInfo from '../authorizationRegister/selectRegister'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import selectFixData from '../authorizationRegister/selectRegister'

const AutBtn: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const navigate = useNavigate()
  const { eMail, password } = useSelector(getRegisterInfo)
  const token = Cookies.get('access_token')

  const data = useSelector(selectFixData)

  useEffect(() => {
    if (
      data.eMail.length > 0 &&
      data.password.length > 0 &&
      data.isFixData === true
    ) {
      dispatch(fetchAuth({ eMail, password }))
    }
  }, [eMail, password, data])

  const handleLogin = () => {
    try {
      dispatch(fixData())
      if (token) navigate('/ListCar')
    } catch (error) {
      console.error('Токен не получен')
    }
  }

  return (
    <div className="btnContainerAut">
      <div className="firstBtnContainerAut">
        <button type="button" className="firstBtnAut">
          Запросить доступ
        </button>
      </div>
      <div className="secondBtnContainerAut">
        <button type="button" className="secondBtnAut" onClick={handleLogin}>
          Войти
        </button>
      </div>
    </div>
  )
}

export default AutBtn
