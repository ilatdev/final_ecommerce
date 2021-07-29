import axios from 'axios'

const ROOFTOP = 'https://rooftop-api-rest-frontend.herokuapp.com/items/'

export const getProducts = async () => {
  const request = await axios.get(ROOFTOP)
  console.log(request)
  return request.data
}
