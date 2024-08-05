import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import setAuthorization from '../../../redux/actions/setAuthorization'
import { OptionsAut } from '../../../interface/interface'

const useAuthorization = ({ name, value }: OptionsAut) => {
  const dispatch = useDispatch()
  const [autData, setAutData] = useState({
    eMail: '',
    password: '',
  })
  const [eyeOpen, setEyeOpen] = useState(false)

  const handleEyeOpen = () => {
    setEyeOpen(!eyeOpen)
  }

  const handleInputAutData = (name: string, value: string) => {
    const truncatedValue = value.substring(0, 150).replace(/^\s+/, '')

    if (name) {
      setAutData((prev) => ({
        ...prev,
        [name]: truncatedValue,
      }))
    }
  }

  const errorEMail =
    (name === 'eMail' && !value.includes('@')) || value.length == 0

  const errorPassword = name === 'password' && value.length === 0 && !errorEMail

  useEffect(() => {
    dispatch(
      setAuthorization({
        eMail: autData.eMail,
        password: autData.password,
      }),
    )
  }, [autData.eMail, autData.password])

  return {
    handleEyeOpen,
    handleInputAutData,
    autData,
    eyeOpen,
    errorEMail,
    errorPassword,
  }
}

export default useAuthorization
