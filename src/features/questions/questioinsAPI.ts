import axios from 'axios'
import { NewQuestion } from '../../Components/ProductDetail/QuestionForm'

const QUESTIONS = 'https://rooftop-api-rest-frontend.herokuapp.com/questions'

interface sendQuestionArg {
  id: number
  data: NewQuestion
}

export const getQuestions = async (id: number) => {
  const request = axios.get(`${QUESTIONS}?item_id=${id}`)
  return request.then((res) => res.data)
}

export const sendQuestion = async (arg: sendQuestionArg) => {
  const request = axios.post(`${QUESTIONS}?item_id=${arg.id}`, arg.data)
  return request.then((res) => res.data)
}
