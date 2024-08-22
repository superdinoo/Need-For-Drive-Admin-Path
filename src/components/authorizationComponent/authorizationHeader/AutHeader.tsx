import React from 'react'
import './AutHeader.scss'
import { LogoAut } from '../../../../public/img/index'

const AutHeader: React.FC = () => {
  return (
    <div className="autHeader">
      <div className="autHeaderLogo">
        <img src={LogoAut} className="autImgLogo" alt="logo" />
        <h2 className="autlogoTxt">Need for drive</h2>
      </div>
    </div>
  )
}

export default AutHeader
