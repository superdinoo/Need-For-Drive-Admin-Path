export interface InputProps {
  value: string
  onChange: (value: string) => void
  name: string
  placeholder?: string
  onReset?: () => void
  labels: string
  list?: string
  type?: 'text' | 'password'
  onClick?: () => void
  eyeOpen?: boolean
}

export interface InputAutRegister {
  eMail: string
  password: string
}

export interface Token {
  access_Token: string
}

export interface ApiSwaggerState {
  token: Token[]
  orderCar: OrderApiPost[]
  carsMain: OrderApiPost[]
  isLoading: boolean
  error: string | null
}

export interface CarApi {
  carId: {
    name: string
  }
  cityId: {
    name: string
  }
  id: number
  priceMax: number
  priceMin: number
  name: string
  description: string
  colors: string
  number: string
  categoryId: {
    idCategory: number
    name: string
    description: string
  }
  thumbnail: {
    path: string
  }
  orderStatusId: {
    name: string
  }
  rateId: {
    id: number
    price: string
  }
  price: number
}

export interface InitialStateListCars {
  listCars: CarApi[]
}

export interface AdminSkelet {
  items: { id: number; name: string }[]
}

export interface OrderStatus {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export interface PointData {
  id: number
  name: string
  address: string
  city_id: number
  createdAt: string
  updatedAt: string
}
export interface RateData {
  id: number
  price: string
  rateType_id: number
  createdAt: string
  updatedAt: string
}

export interface OrderApiPost {
  id: number
  carId: CarApi
  color: string
  dateFrom: string
  dateTo: string
  price: number
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
  createdAt: string
  updatedAt: string
  orderStatusId: OrderStatus
  cityId: OrderStatus
  pointId: PointData
  rateId: RateData
}

export interface AdminInfoCarOptionsProps {
  dateFrom: string
  dateTo: string
  dataCars: OrderApiPost
}

export interface ItemsProps {
  id: number
  name: string
  value: boolean
}

export interface ItemsData {
  items: ItemsProps[]
}

export interface AdminPaginationProps {
  total: number
  current: number
  pageSize: number
  onChange: (page: number) => void
}

export interface DataSkelet {
  title: string
  placeholder: string
  name: string
  value: string
  onChange: (word: string) => void
  type: string
}

export interface InputCarCart {
  selectedFile: {}
  description: string
  model: string
  typeAuto: string
  color: string
}

export interface ButtonSkelet {
  name: string
}
interface FetchFunctionArgs {
  token: string
  carsSizePage: number
  currentPage: number
}

export interface PaginationOptions {
  fetchFunction: (args: FetchFunctionArgs) => void
  carsSizePage: number
}

export interface DataSkelet {
  title: string
  placeholder: string
  name: string
  value: string
  onChange: (word: string) => void
  type: string
}

export interface InputCarCart {
  selectedFile: {}
  description: string
  model: string
  typeAuto: string
  color: string
}

export interface ButtonSkelet {
  name: string
}
