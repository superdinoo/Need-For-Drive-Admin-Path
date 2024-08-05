import React from 'react'
import './AutRegister.scss'
import useAuthorization from './useAuthorization'
import AutSkeletRegister from './AutSkeletRegister'
import AutBtn from '../authorizationBtn/AutBtn'

const AutRegister: React.FC = () => {
  const { handleEyeOpen, handleInputAutData, autData, eyeOpen } =
    useAuthorization({ name: '', value: '' })

  return (
    <div className="formContainerAut">
      <div className="mainElementForm">
        <div className="logoTxtMainElementForm">
          <h3 className="txtLogoMain">Вход</h3>
        </div>
        <AutSkeletRegister
          value={autData.eMail}
          onChange={(value: string) => handleInputAutData('eMail', value)}
          type="text"
          name="eMail"
          labels="Почта"
        />
        <AutSkeletRegister
          value={autData.password}
          onChange={(value: string) => handleInputAutData('password', value)}
          type={eyeOpen ? 'text' : 'password'}
          name="password"
          labels="Пароль"
          onClick={handleEyeOpen}
          eyeOpen={eyeOpen}
        />
        <AutBtn />
      </div>
    </div>
  )
}

export default AutRegister
