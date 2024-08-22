import { useEffect, useState } from 'react'

const usePaginations = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const carsSizePage = 3

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return {
    carsSizePage,
    currentPage,
    handlePageChange,
    totalPage,
  }
}

export default usePaginations
