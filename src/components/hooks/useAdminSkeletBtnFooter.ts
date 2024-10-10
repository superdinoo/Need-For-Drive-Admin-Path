import { useDispatch, useSelector } from 'react-redux'
import {
  resetFixCarCart,
  setFixCarCart,
} from '../../redux/reducers/carCartReducer'
import { useLocation, useNavigate } from 'react-router-dom'
import fetchPutCarOne from '../../redux/thunks/fetchPutCarOne'
import Cookies from 'js-cookie'
import selectOneCar from '../adminCartComponents/selectCarOne'
import selectOrdersCar from '../adminCartComponents/selectCarDataInput'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'redux/rootState'
import { Action } from 'redux'
import fetchDeleteCarOne from '../../redux/thunks/fetchDeleteCarOne'
import fetchPostCarCart from '../../redux/thunks/fetchPostCarCart'

const useAdminSkeletBtnFooter = (name: string) => {
  const location = useLocation()
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const navigate = useNavigate()
  const { carOne } = useSelector(selectOneCar)
  const data = useSelector(selectOrdersCar)

  const timestamp = new Date().getTime()

  const handleButtonCarCart = () => {
    if (
      name === 'Сохранить' &&
      location.pathname === `/AdminCart/${carOne.id}`
    ) {
      dispatch(setFixCarCart())
      dispatch(
        fetchPutCarOne({
          token: Cookies.get('access_token') as string,
          id: String(carOne.id),
          thumbnai: data.carCartFile ?? '',
          description: data.description,
          colors: data.color,
          name: data.model,
          categoryId: data.typeAuto,
        }),
      )
    }
    if (name === 'Сохранить' && location.pathname === '/AdminCart') {
      dispatch(setFixCarCart())
      dispatch(
        fetchPostCarCart({
          token: Cookies.get('access_token') as string,
          id: `${timestamp}`,
          thumbnai: data.carCartFile ?? '',
          description: data.description,
          colors: data.color,
          name: data.model,
          categoryId: data.typeAuto,
        }),
      )
    }
    if (name === 'Отменить') {
      dispatch(resetFixCarCart())
      navigate('/ListCar')
    }
    if (name === 'Удалить') {
      dispatch(
        fetchDeleteCarOne({
          token: Cookies.get('access_token') as string,
          id: String(carOne.id),
          name: data.model,
        }),
      )
      navigate('/ListCar')
    }
  }

  return {
    handleButtonCarCart,
  }
}

export default useAdminSkeletBtnFooter
