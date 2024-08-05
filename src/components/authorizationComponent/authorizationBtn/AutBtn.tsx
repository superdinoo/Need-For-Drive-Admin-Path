import React from 'react'
import './AutBtn.scss'

const AutBtn: React.FC = () => {
  return (
    <div className="btnContainerAut">
      <div className="firstBtnContainerAut">
        <button type="button" className="firstBtnAut">
          Запросить доступ
        </button>
      </div>
      <div className="secondBtnContainerAut">
        <button type="button" className="secondBtnAut">
          Войти
        </button>
      </div>
    </div>
  )
}

export default AutBtn
