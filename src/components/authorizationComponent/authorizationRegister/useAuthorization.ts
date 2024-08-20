import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import setAuthorization from '../../../redux/actions/setAuthorization'

const useAuthorization = () => {
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
  }
}

export default useAuthorization
