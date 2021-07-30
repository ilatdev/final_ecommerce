import axios from 'axios'

const ROOFTOP = 'https://rooftop-api-rest-frontend.herokuapp.com/items'

export const getProducts = async () => {
  const request = axios.get(ROOFTOP)
  return request.then((res) => res.data.items)
}
