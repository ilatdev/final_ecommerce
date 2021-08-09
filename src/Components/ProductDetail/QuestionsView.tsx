import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import dayjs from 'dayjs'

import { useAppSelector } from '../../app/hooks'
import {
  Question,
  questionCount
} from '../../features/questions/questionsSlice'

const useStyles = makeStyles((theme) => ({
  questionDate: {
    padding: '1rem 0',
    color: theme.palette.secondary.main
  },
  questionContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  questionRef: {
    fontWeight: 600,
    marginRight: '10px'
  },
  answerRef: {
    fontWeight: 600,
    marginRight: '19px'
  }
}))

const QuestionsView: React.FC = () => {
  const cls = useStyles()
  const { data } = useAppSelector(questionCount)

  const QuestionWithAnswer = Object.values(data).map((el: Question, index) => {
    return (
      <Box py={1} key={index}>
        <Typography variant="caption" className={cls.questionDate}>
          {`By ${el.customer_name} on
          ${dayjs(el.sent_at).format('HH:MM MMMM DD[,] YYYY')}`}
        </Typography>
        <Box className={cls.questionContainer}>
          <Typography className={cls.questionRef}>Question:</Typography>
          <Typography>{el.question}</Typography>
        </Box>
        <Box className={cls.questionContainer}>
          <Typography className={cls.answerRef}>Answer:</Typography>
          <Typography>{el.answer}</Typography>
        </Box>
      </Box>
    )
  })

  return (
    <Box p={2}>
      <Typography variant="h5">Customer questions & answers </Typography>
      <Box py={2}>{QuestionWithAnswer}</Box>
    </Box>
  )
}

export default QuestionsView
