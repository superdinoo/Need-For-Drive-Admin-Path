import { AdminInfoCarOptionsProps } from 'interface/interface'
import { useSelector } from 'react-redux'
import getCarCart from './adminCartComponents/selectCarDataInput'
const { format } = require('date-fns')

export const adminDateFrom = ({
  dataCars,
}: {
  dataCars: AdminInfoCarOptionsProps
}) => {
  const startTimestamp = dataCars.dateFrom
  const endTimestamp = dataCars.dateTo

  const startDate = new Date(Number(startTimestamp))
  const endDate = new Date(Number(endTimestamp))

  const start = format(startDate, 'dd.MM.yyyy HH:mm')
  const end = format(endDate, 'dd.MM.yyyy HH:mm')

  return { start, end }
}

export const percentage = () => {
  const dataInput = useSelector(getCarCart)
  let percentages = 0

  if (dataInput.carCartFile !== null && dataInput.carCartFile !== '') {
    percentages += 20
  }
  if (dataInput.color !== '') {
    percentages += 20
  }
  if (dataInput.model !== undefined && dataInput.model !== '') {
    percentages += 20
  }
  if (dataInput.typeAuto !== undefined && dataInput.typeAuto !== '') {
    percentages += 20
  }
  if (dataInput.description !== undefined && dataInput.description !== '') {
    percentages += 20
  }
  return percentages
}
