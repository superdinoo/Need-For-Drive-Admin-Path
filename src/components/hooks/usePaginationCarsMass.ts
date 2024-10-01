import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchCarMass from '../../redux/thunks/fetchCarsMass'
import { selectTokensApi } from '../adminOrder/adminOrderComponent/selectorsToken'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'redux/rootState'
import { Action } from 'redux'

const useCarMassPagination = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const carsSizePage = 3
  const token = useSelector(selectTokensApi)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    dispatch(fetchCarMass({ token, carsSizePage, currentPage })).then(
      (result) => {
        if (result.payload.totalCount) {
          setTotalPage(Math.ceil(result.payload.totalCount / carsSizePage))
        }
      },
    )
  }, [currentPage])

  return {
    carsSizePage,
    currentPage,
    handlePageChange,
    totalPage,
  }
}

export default useCarMassPagination
