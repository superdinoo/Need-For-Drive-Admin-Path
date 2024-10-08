import { CarApi } from 'interface/interface'
import { useLocation, useNavigate } from 'react-router-dom'
import { setCarOne } from '../../redux/reducers/apiOrderData'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeEvent, useEffect } from 'react'
import selectOneCar from '../adminCartComponents/selectCarOne'
import {
  resetFixCarCart,
  setCarCartInput,
} from '../../redux/reducers/carCartReducer'

const useAdminCarDataCart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { carOne }: { carOne: CarApi } = useSelector(selectOneCar)

  if (location.pathname === '/ListCar') {
    dispatch(resetFixCarCart())
  }

  const handleDataCar = (carId: CarApi) => {
    if (carId.id) {
      dispatch(setCarOne(carId))
      navigate(`/AdminCart/${carId.id}`)
    }
  }

  //AdminCartRightCenterMain
  const getValues = () => {
    if (location.pathname === '/AdminCart') {
      return {
        model: '',
        color: '',
        typeAuto: '',
        titleCar: '',
        description: '',
      }
    }
    return {
      model: carOne.name,
      typeAuto: carOne.categoryId?.description,
      color: Array.isArray(carOne.colors) ? carOne.colors[0] : '',
      titleCar: carOne.name,
      description: carOne.description,
    }
  }

  useEffect(() => {
    const values = getValues()
    dispatch(setCarCartInput({ field: 'model', value: values.model }))
    dispatch(
      setCarCartInput({
        field: 'color',
        value: values.color,
      }),
    )
    dispatch(
      setCarCartInput({
        field: 'typeAuto',
        value: values.typeAuto,
      }),
    )
    dispatch(
      setCarCartInput({
        field: 'titleCar',
        value: values.titleCar,
      }),
    )
    dispatch(
      setCarCartInput({
        field: 'description',
        value: values.description,
      }),
    )
  }, [carOne, location.pathname])

  const handleInputData = (name: string, value: string) => {
    const truncatedValue = value.substring(0, 150).replace(/^\s+/, '')

    if (name) {
      dispatch(setCarCartInput({ field: name, value: truncatedValue }))
    }
  }

  //AminCartHeder

  const getValuesImg = () => {
    if (location.pathname === '/AdminCart') {
      return {
        carCartFile: '',
      }
    }
    if (carOne?.thumbnail?.path) {
      const baseUrl = new URL('/', window.location.href).origin
      return {
        carCartFile: new URL(carOne.thumbnail.path, baseUrl).toString(),
      }
    }
  }

  useEffect(() => {
    const values = getValuesImg()
    if (values && carOne.thumbnail?.path) {
      dispatch(
        setCarCartInput({
          field: 'carCartFile',
          value: values.carCartFile,
        }),
      )
    }
  }, [carOne, dispatch])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const fileUrl = URL.createObjectURL(file)
      dispatch(setCarCartInput({ field: 'carCartFile', value: fileUrl }))
    }
  }

  return {
    handleDataCar,
    handleInputData,
    handleFileChange,
  }
}

export default useAdminCarDataCart
