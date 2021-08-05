import { Box, Typography } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
import { useAppSelector } from '../../app/hooks'
import {
  Question,
  questionCount
} from '../../features/questions/questionsSlice'

const QuestionsView: React.FC = () => {
  const { data } = useAppSelector(questionCount)

  const QuestionWithAnswer = Object.values(data).map((el: Question, index) => {
    return (
      <Box p={1} m={1} key={index}>
        <Typography variant="subtitle2">
          {moment(el.sent_at).format('LL HH:mm')}
        </Typography>
        <Typography>{el.question}</Typography>
        <Typography>{el.answer}</Typography>
      </Box>
    )
  })

  return (
    <Box>
      <h2>Preguntas y respuestas</h2>
      {QuestionWithAnswer}
    </Box>
  )
}

export default QuestionsView
