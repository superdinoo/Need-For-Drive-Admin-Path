import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CarApi } from 'interface/interface'

const useAdminSkelet = () => {
  const [clickList, setClickList] = useState<{ [key: number]: boolean }>({})
  const [filters, setFilters] = useState<{ [key: string]: string }>({})
  const [filteredCars, setFilteredCars] = useState<CarApi[]>([])

  const filtereCars = (filterName: string, filterValue: string) => {
    const carsMas = filteredCars

    if (filterName === 'Название авто') {
      return carsMas.filter((car) => car.name === filterValue)
    }
    if (filterName === 'Категория') {
      return carsMas.filter((car) => car.categoryId.name === filterValue)
    }
    return carsMas
  }

  const handleClickFilterCars = (itemName: string, listTextName: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [itemName]: listTextName }))

    const newFilteredCars = filtereCars(itemName, listTextName)

    setFilteredCars(newFilteredCars)
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
    filteredCars,
    filtereCars,
  }
}

export default useAdminSkelet
