import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthorization } from '../../redux/actions/setAuthorization'
import getRegisterInfo from '../authorizationComponent/authorizationRegister/selectRegister'

const useAuthorization = () => {
  const { isFixData } = useSelector(getRegisterInfo)

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

  useEffect(() => {
    if (isFixData) {
      dispatch(
        setAuthorization({
          eMail: autData.eMail,
          password: autData.password,
        }),
      )
    }
  }, [autData.eMail, autData.password, isFixData])

  return {
    handleEyeOpen,
    handleInputAutData,
    autData,
    eyeOpen,
  }
}

export default useAuthorization
