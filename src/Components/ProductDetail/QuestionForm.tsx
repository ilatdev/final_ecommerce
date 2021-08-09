import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import { useEffect, useState } from 'react'

export interface NewQuestion {
  email: string
  question: string
}

const useStyles = makeStyles((theme) => ({
  questionForm: {
    padding: '1rem'
  },
  questionEmail: {
    minWidth: 300,
    marginTop: '1rem',
    padding: '1rem',
    borderRadius: 25,
    backgroundColor: '#f7f7f7'
  },
  questionTextArea: {
    minWidth: 300,
    minHeight: 130,
    marginTop: '1rem',
    padding: '1rem',
    border: 'none',
    resize: 'none',
    borderRadius: 25,
    backgroundColor: '#f7f7f7'
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  question: yup.string().min(10).max(500).required()
})

interface QuestionFormProps {
  onSubmit: SubmitHandler<NewQuestion>
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit }) => {
  const cls = useStyles()
  const [successMessage, setSuccessMessage] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful }
  } = useForm<NewQuestion>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (isSubmitting) setSuccessMessage('')
    if (isSubmitSuccessful) {
      reset()
      setSuccessMessage(
        'Thanks! Your question about this product was sent succesfully'
      )
    }
  }, [isSubmitting, isSubmitSuccessful, reset])

  return (
    <Box p={2}>
      <Typography variant="h5">Have a question? Search for answers </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.questionForm}>
        <TextField
          name="email"
          inputProps={{ ...register('email') }}
          InputProps={{ disableUnderline: true }}
          error={!!errors.email}
          disabled={isSubmitting}
          placeholder="your@email.com"
          className={cls.questionEmail}
        />
        <Box pl={2}>
          <Typography color="error">
            {!!errors.email && 'It must be a valid email'}
          </Typography>
        </Box>
        <TextField
          name="question"
          inputProps={{ ...register('question') }}
          InputProps={{ disableUnderline: true }}
          disabled={isSubmitting}
          placeholder="Write your question here..."
          className={cls.questionTextArea}
          multiline
        />
        <Box pl={2} mb={2}>
          <Typography style={{ color: 'green' }}>{successMessage}</Typography>
          <Typography color="error">
            {!!errors.question && 'Must contain between 10 to 500 characters'}
          </Typography>
        </Box>
        <Button
          disabled={isSubmitting || !isValid}
          variant="contained"
          color="secondary"
          type="submit">
          {isSubmitting ? <CircularProgress /> : 'Send'}
        </Button>
      </form>
    </Box>
  )
}

export default QuestionForm
