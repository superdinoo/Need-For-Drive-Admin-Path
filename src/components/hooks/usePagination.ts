import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectTokensApi } from '../adminOrder/adminOrderComponent/selectorsToken'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'redux/rootState'
import { Action } from 'redux'
import { PaginationOptions } from 'interface/interface'

const usePagination = ({ fetchFunction, carsSizePage }: PaginationOptions) => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const token = useSelector(selectTokensApi)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    dispatch(fetchFunction({ token, carsSizePage, currentPage })).then(
      (result: { payload: { totalCount: number } }) => {
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

export default usePagination
