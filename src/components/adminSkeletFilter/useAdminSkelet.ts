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
import { useLocation } from 'react-router-dom'
import { setFilteredCarsMass } from '../../redux/reducers/carsListReducer'
import { selectCarsMass } from '../adminListCars/adminListCarsComponent/selectorsCarsMass'

const useAdminSkelet = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const dataCars = useSelector(selectOrdersCar)
  const dataCarsMass = useSelector(selectCarsMass)
  const [clickList, setClickList] = useState<{
    carsMassClick: { [key: number]: boolean }
    carDataClick: { [key: number]: boolean }
  }>({
    carsMassClick: {},
    carDataClick: {},
  })

  const [filters, setFilters] = useState({
    carsMass: {},
    carData: {},
  })
  const { apply } = useSelector(selectButtonFilter)

  const filtereCars = (filterName: string, filterValue: string) => {
    const carsDataFilter =
      location.pathname === '/ListCar' ? dataCarsMass : dataCars

    const filterPrice = ['1100', '3200', '9999']

    if (filterName === 'Название авто') {
      return carsDataFilter.filter((car: CarApi) =>
        location.pathname === '/ListCar'
          ? car.name === filterValue
          : car.carId.name === filterValue,
      )
    }

    if (filterName === 'Категория') {
      return carsDataFilter.filter(
        (car: CarApi) => car.categoryId.name === filterValue,
      )
    }
    if (filterName === 'Город') {
      return carsDataFilter.filter(
        (car: CarApi) => car.cityId.name === filterValue,
      )
    }
    if (filterName === 'Длительность') {
      return carsDataFilter.filter((car: CarApi) =>
        filterPrice.includes(car.rateId.price),
      )
    }

    return carsDataFilter
  }

  const handleClickFilterCars = (itemName: string, listTextName: string) => {
    if (apply) {
      const pathCars = location.pathname === '/ListCar' ? 'carMass' : 'carData'

      setFilters((prevFilters) => ({
        ...prevFilters,
        [pathCars]: {
          ...prevFilters[pathCars],
          [itemName]: listTextName,
        },
      }))
      const newFilteredCars = filtereCars(itemName, listTextName)

      location.pathname === '/ListCar'
        ? dispatch(setFilteredCarsMass(newFilteredCars))
        : dispatch(setFilteredCarsData(newFilteredCars))
    }
  }

  const handleReset = () => {
    dispatch(setButtonFilter('reset'))
    dispatch(setFilteredCarsData(dataCars))
    dispatch(setFilteredCarsMass(dataCarsMass))
  }

  const handleClickList = (itemId: number) => {
    const clickPath =
      location.pathname === '/ListCar' ? 'carsMassClick' : 'carDataClick'

    setClickList((prevClick) => ({
      ...prevClick,
      [clickPath]: {
        ...prevClick[clickPath],
        [itemId]: !prevClick[clickPath][itemId],
      },
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
