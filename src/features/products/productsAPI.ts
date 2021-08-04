import axios from 'axios'
import { Product } from './productsSlice'

const ROOFTOP = 'https://rooftop-api-rest-frontend.herokuapp.com/items'

export const getProducts = async (): Promise<Product[]> => {
  const request = axios.get(ROOFTOP)
  return request.then((res) => res.data.items)
}
