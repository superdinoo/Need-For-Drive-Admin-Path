import React from 'react'
import './AuthorizationForm.scss'
import AutHeader from '../../components/authorizationComponent/authorizationHeader/AutHeader'
import AutRegister from '../../components/authorizationComponent/authorizationRegister/AutRegister'

const AuthorizationForm: React.FC = () => {
  return (
    <div className="authorizationContainer">
      <AutHeader />
      <AutRegister />
    </div>
  )
}

export default AuthorizationForm
