import { useEffect, useState } from 'react'
import { selectTokensApi } from '../../selectorsToken'
import { useDispatch, useSelector } from 'react-redux'
import fetchCarMass from '../../../../../redux/thunks/fetchCarsMass'
import fetchCarData from '../../../../../redux/thunks/fetchCarData'

const usePaginations = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState({
    currentCarsMass: 1,
    currentCarData: 1,
  })
  const [totalPage, setTotalPage] = useState({
    totalCarsMass: 1,
    totalCarData: 1,
  })
  const carsSizePage = 3
  const token = useSelector(selectTokensApi)

  const handlePageChange = (page: number) => {
    setCurrentPage({
      ...currentPage,
      currentCarData: page,
      currentCarsMass: page,
    })
  }

  const currentPageCarsMass = currentPage.currentCarsMass
  const currentPageCarData = currentPage.currentCarData

  useEffect(() => {
    const fetchPageData = async () => {
      const promises = [
        dispatch(fetchCarMass({ token, carsSizePage, currentPageCarsMass })),
        dispatch(fetchCarData({ token, carsSizePage, currentPageCarData })),
      ]
      const results = await Promise.all(promises)
      results.forEach((result, index) => {
        if (result.payload.totalCount) {
          const key = index === 0 ? 'totalCarsMass' : 'totalCarData'
          setTotalPage((prevTotalPage) => ({
            ...prevTotalPage,
            [key]: Math.ceil(result.payload.totalCount / carsSizePage),
          }))
        }
      })
    }
    fetchPageData()
  }, [currentPageCarsMass, currentPageCarData])

  return {
    carsSizePage,
    currentPage,
    handlePageChange,
    totalPage,
    token,
    setTotalPage,
  }
}

export default usePaginations
