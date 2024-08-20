import React from 'react'
import './AutBtn.scss'
import fetchAuth from '../../../redux/thunks/fetchAuth'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'redux/rootState'
import { Action } from 'redux'

const AutBtn: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
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
        <button type="button" className="secondBtnAut" onClick={handleLogin}>
          Войти
        </button>
      </div>
    </div>
  )
}

export default AutBtn
