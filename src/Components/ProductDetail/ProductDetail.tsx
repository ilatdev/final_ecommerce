import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Product } from '../../features/products/productsSlice'
import ProductGallery from './ProductGallery'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  deleted: {
    textDecoration: 'line-through'
  }
}))

const ProductDetail: React.FC<Product> = (props) => {
  const { title, images, price, offer, currency } = props
  const cls = useStyles()

  const viewPrice = () => {
    if (offer) {
      return (
        <>
          <Typography variant="h4" color="error">
            On Sale
          </Typography>
          <Box display="flex" justifyContent="space-around" flexGrow="1">
            <Typography
              variant="h6"
              color="textSecondary"
              style={{
                textDecoration: 'line-through'
              }}>
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

  console.log(offer)
  return (
    <Container>
      <Box className={cls.content}>
        <Typography variant="h5">{title}</Typography>
        <ProductGallery images={images} />
        <Box>{viewPrice}</Box>
      </Box>
    </Container>
  )
}

export default ProductDetail
