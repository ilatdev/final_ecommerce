import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Box,
  Button,
  LinearProgress,
  TextareaAutosize,
  TextField,
  Typography
} from '@material-ui/core'
import { useEffect, useState } from 'react'

export interface NewQuestion {
  email: string
  question: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  question: yup.string().min(10).max(500).required()
})

interface QuestionFormProps {
  onSubmit: SubmitHandler<NewQuestion>
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit }) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box my={2}>
        <TextField
          name="email"
          inputProps={{ ...register('email') }}
          error={!!errors.email}
          disabled={isSubmitting}
          variant="filled"
          placeholder="your@email.com"
        />
        <Typography color="error">
          {!!errors.email && 'It must be a valid email'}
        </Typography>
      </Box>
      <Box my={2}>
        <TextareaAutosize
          {...register('question')}
          name="question"
          spellCheck
          placeholder={'Write your question here...'}
          disabled={isSubmitting}
          style={{
            fontFamily: 'inherit',
            fontSize: 'inherit',
            padding: '12px 12px 10px',
            border: 'none',
            minWidth: 600,
            minHeight: 130,
            resize: 'none'
          }}
        />
        {isSubmitting && <LinearProgress />}
        <Typography style={{ color: 'green' }}>{successMessage}</Typography>
        <Typography color="error">
          {!!errors.question && 'Must contain between 10 to 500 characters'}
        </Typography>
      </Box>
      <Button
        disabled={isSubmitting || !isValid}
        variant="contained"
        color="primary"
        type="submit">
        Send
      </Button>
    </form>
  )
}

export default QuestionForm
