import React from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import './AutRegister.scss'
import { InputProps } from 'interface/interface'

const AutSkeletRegister: React.FC<InputProps> = ({
  value,
  onChange,
  name,
  labels,
  type,
  onClick,
  eyeOpen,
}) => {
  const errorEMail =
    name === 'eMail' && !value.includes('@') && value.length >= 1
  const errorPassword = name === 'password' && value.length >= 1

  const eyeOpenClose = () => {
    if (name === 'password' && !eyeOpen) {
      return (
        <EyeInvisibleOutlined
          className="eyeStyle"
          type="button"
          onClick={onClick}
        />
      )
    }
    if (eyeOpen) {
      return (
        <EyeOutlined className="eyeStyle" type="button" onClick={onClick} />
      )
    }
    return null
  }

  return (
    <div className="containerInputAutRegister">
      <div className="settingAutTitle">
        <p className="titleInputAut">{labels}</p>
      </div>
      <div className="inputWrapperReg">
        <input
          className="inputOptionsAut"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={name}
          type={type}
        />
        {eyeOpenClose()}
      </div>
      {name === 'eMail' && errorEMail && (
        <p className="errorAut">Введите корректное название почты</p>
      )}
      {name === 'password' && errorPassword && (
        <p className="errorAut">Введите пароль</p>
      )}
    </div>
  )
}

export default AutSkeletRegister
