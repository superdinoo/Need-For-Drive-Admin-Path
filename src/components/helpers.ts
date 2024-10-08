import { AdminInfoCarOptionsProps } from 'interface/interface'
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
