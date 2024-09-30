import { BlogIcon, Blog_Posts, New_Post } from '../../../../public/img/index'

const adminBtn = [
  {
    name: 'Карточка автомобиля',
    img: BlogIcon,
    id: 1,
    isActive: false,
    Path: '/Admin',
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

export default adminBtn
