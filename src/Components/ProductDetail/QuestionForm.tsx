import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography
} from '@material-ui/core'

interface IFormInputs {
  email: string
  question: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  question: yup.string().min(10).max(150).required()
})

export default function QuestionForm() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={1}>
        <Controller
          render={({ field }) => (
            <TextField
              onChange={field.onChange}
              inputRef={field.ref}
              error={!!errors.email}
              variant="filled"
              placeholder="your@email.com"
            />
          )}
          name="email"
          control={control}
          rules={{ required: true }}
        />
        <Box mt={1}>
          <Typography color="error">
            {errors.email && 'It must be a valid email'}
          </Typography>
        </Box>
      </Box>
      <Box mt={1}>
        <Controller
          render={({ field }) => (
            <TextareaAutosize
              onChange={field.onChange}
              ref={field.ref}
              spellCheck
              placeholder={'Write your question here...'}
              style={{
                fontFamily: 'inherit',
                fontSize: 'inherit',
                padding: '12px 12px 10px',
                border: 'none',
                minWidth: 600,
                minHeight: 100
              }}
            />
          )}
          name="question"
          control={control}
          rules={{ required: true }}
        />
      </Box>
      <Box my={1}>
        <Typography color="error">
          {errors.question && 'Must contain between 10 to 150 characters'}
        </Typography>
      </Box>
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
  )
}
