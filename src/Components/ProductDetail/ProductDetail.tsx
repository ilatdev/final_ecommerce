import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Product } from '../../features/products/productsSlice'
import ProductGallery from './ProductGallery'
import moment from 'moment'
import QuestionForm, { NewQuestion } from './QuestionForm'
import QuestionsView from './QuestionsView'
import { useAppDispatch } from '../../app/hooks'
import {
  fetchQuestions,
  sendNewQuestion
} from '../../features/questions/questionsSlice'
import { SubmitHandler } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  offerPrice: {
    textDecoration: 'line-through'
  }
}))

const ProductDetail: React.FC<Product> = (props) => {
  const { title, images, price, offer, currency, id } = props
  const dispatch = useAppDispatch()
  const cls = useStyles()

  useEffect(() => {
    dispatch(fetchQuestions(id))
  }, [dispatch, id])

  const viewPrice = () => {
    if (offer) {
      return (
        <>
          <Typography variant="h4" color="error">
            On Sale
          </Typography>
          <Box display="flex">
            <Typography
              variant="h6"
              color="textSecondary"
              className={cls.offerPrice}>
              {`${currency} ${price}`}
            </Typography>
            <Typography variant="h4">{`${currency} ${offer.price}`}</Typography>
          </Box>
          <Typography variant="h4">{`Offer ends ${moment(
            offer.expires_at
          ).fromNow()}`}</Typography>
        </>
      )
    }
    return <Typography variant="h4">{`${currency} ${price}`}</Typography>
  }

  const onSubmit: SubmitHandler<NewQuestion> = async (data) =>
    dispatch(sendNewQuestion({ id, data }))

  return (
    <Container>
      <Box className={cls.content}>
        <Typography variant="h5">{title}</Typography>
        <ProductGallery images={images} />
        <Box>{viewPrice}</Box>
        <QuestionsView />
        <QuestionForm onSubmit={onSubmit} />
      </Box>
    </Container>
  )
}

export default ProductDetail
