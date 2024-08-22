import { NewPost, BlogIcon, BlogPost } from '../../../../src/assets'

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
    img: BlogPost,
    id: 2,
    isActive: false,
    Path: '/ListCar',
  },
  {
    name: 'Заказы',
    img: NewPost,
    id: 3,
    isActive: false,
    Path: '/AdminOrders',
  },
]

export default adminBtn
