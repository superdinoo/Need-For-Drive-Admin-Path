import { BlogIcon, Blog_Posts, New_Post } from '../../../../public/img/index'

export const adminBtn = [
  {
    name: 'Карточка автомобиля',
    img: BlogIcon,
    id: 1,
    isActive: false,
    Path: '/AdminCart',
  },
  {
    name: 'Список авто',
    img: Blog_Posts,
    id: 2,
    isActive: false,
    Path: '/ListCar',
  },
  {
    name: 'Заказы',
    img: New_Post,
    id: 3,
    isActive: false,
    Path: '/AdminOrders',
  },
]

export const items = [
  { id: 1234567890, name: 'Длительность' },
  { id: 112, name: 'Название авто' },
  {
    id: 113,
    name: 'Город',
  },
  { id: 114, name: 'Статус' },
]
