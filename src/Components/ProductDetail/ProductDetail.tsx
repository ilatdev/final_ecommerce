import React, { useEffect } from 'react'
import { Box, makeStyles, Paper, Typography } from '@material-ui/core'
import { SubmitHandler } from 'react-hook-form'

import ProductGallery from './ProductGallery'
import QuestionForm, { NewQuestion } from './QuestionForm'
import QuestionsView from './QuestionsView'
import { useAppDispatch } from '../../app/hooks'
import { Product } from '../../features/products/productsSlice'
import {
  fetchQuestions,
  sendNewQuestion
} from '../../features/questions/questionsSlice'

import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const useStyles = makeStyles((theme) => ({
  productDetailRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.secondary.light,
    margin: '1rem 0',
    padding: '3rem'
  },
  productDetails: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  productDescription: {
    maxWidth: 400,
    flexShrink: 3,
    minWidth: 375,
    padding: '1rem'
  },
  onSale: {
    fontWeight: 800,
    color: theme.palette.secondary.main
  },
  prevPrice: {
    marginRight: 5,
    textDecoration: 'line-through'
  },
  offerPrice: {
    color: '#10c781'
  },
  expireDate: {
    fontStyle: 'italic',
    fontWeight: 400,
    color: theme.palette.primary.dark
  }
}))

const ProductDetail: React.FC<Product> = (props) => {
  const { title, images, price, offer, currency, id } = props
  const dispatch = useAppDispatch()
  const cls = useStyles()

  useEffect(() => {
    dispatch(fetchQuestions(id))
  }, [dispatch, id])

  const offerExpireDif = dayjs(offer?.expires_at).diff(dayjs())
  const offerExpireView = dayjs
    .duration(offerExpireDif)
    .format('M [months] D [days] H [hours]')

  const prevPrice = `${currency} ${price}`
  const offerPrice = `${currency} ${offer?.price}`

  const viewPrice = (
    <Box py={2}>
      <Typography className={cls.onSale} variant="h5">
        On Sale!
      </Typography>
      <Box display="flex">
        <Typography variant="body2" className={cls.prevPrice}>
          {prevPrice}
        </Typography>
        <Typography variant="h4" className={cls.offerPrice}>
          {offerPrice}
        </Typography>
      </Box>
      <Typography variant="subtitle2" className={cls.expireDate}>
        offer ends in {offerExpireView}
      </Typography>
    </Box>
  )

  const onSubmit: SubmitHandler<NewQuestion> = async (data) =>
    dispatch(sendNewQuestion({ id, data }))

  return (
    <Paper className={cls.productDetailRoot}>
      <Box className={cls.productDetails}>
        <Box>
          <ProductGallery images={images} />
        </Box>
        <Box className={cls.productDescription}>
          <Typography variant="h4">{title}</Typography>
          {offer ? (
            viewPrice
          ) : (
            <Typography variant="h4">{`${currency} ${price}`}</Typography>
          )}
          <Typography variant="body1">
            Dimensions: 10x50x30 <br /> Lorem Ipsum is simply dummy text Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </Box>
      </Box>
      <QuestionsView />
      <QuestionForm onSubmit={onSubmit} />
    </Paper>
  )
}

export default ProductDetail
