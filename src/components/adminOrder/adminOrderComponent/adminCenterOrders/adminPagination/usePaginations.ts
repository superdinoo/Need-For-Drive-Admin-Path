import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchCarData from '../../../../../redux/thunks/fetchCarData'
import { selectTokensApi } from '../../selectorsToken'
import { RootState } from 'redux/rootState'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'

const usePaginations = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const carsSizePage = 3
  const token = useSelector(selectTokensApi)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  useEffect(() => {
    dispatch(fetchCarData({ token, carsSizePage, currentPage })).then(
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

export default usePaginations
