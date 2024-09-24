import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CarApi } from 'interface/interface'
import {
  selectButtonFilter,
  selectOrdersCar,
} from '../adminOrder/adminOrderComponent/adminCenterOrders/adminCenterInfoCar/selectorsOrdersCars'
import {
  setButtonFilter,
  setFilteredCarsData,
} from '../../redux/reducers/apiOrderData'

const useAdminSkelet = () => {
  const dispatch = useDispatch()
  const dataCars = useSelector(selectOrdersCar)
  const [clickList, setClickList] = useState<{ [key: number]: boolean }>({})
  const [filters, setFilters] = useState<{ [key: string]: string }>({})
  const { apply } = useSelector(selectButtonFilter)

  const filtereCars = (filterName: string, filterValue: string) => {
    const carsMas = dataCars
    const filterPrice = ['1100', '3200', '9999']

    if (filterName === 'Название авто') {
      return carsMas.filter((car: CarApi) => car.carId.name === filterValue)
    }
    if (filterName === 'Город') {
      return carsMas.filter((car: CarApi) => car.cityId.name === filterValue)
    }
    if (filterName === 'Длительность') {
      return carsMas.filter((car: CarApi) =>
        filterPrice.includes(car.rateId.price),
      )
    }

    return carsMas
  }

  const handleClickFilterCars = (itemName: string, listTextName: string) => {
    if (apply) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [itemName]: listTextName,
      }))
      const newFilteredCars = filtereCars(itemName, listTextName)
      dispatch(setFilteredCarsData(newFilteredCars))
    }
  }

  const handleReset = () => {
    dispatch(setButtonFilter('reset'))
    dispatch(setFilteredCarsData(dataCars))
  }

  const handleClickList = (itemId: number) => {
    setClickList((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  return {
    clickList,
    handleClickList,
    handleClickFilterCars,
    handleReset,
    dataCars,
    filters,
  }
}

export default useAdminSkelet
