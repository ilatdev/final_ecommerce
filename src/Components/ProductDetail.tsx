import {
  Box,
  Container,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core'
import React from 'react'
import { Product } from '../features/products/productsSlice'

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))

const ProductDetail: React.FC<Product> = (props) => {
  const { title, images, price, offer, currency } = props
  const cls = useStyles()

  return (
    <Container>
      <Paper className={cls.content}>
        <Typography variant="h5">{title}</Typography>
        <Box display="flex">
          {images.map((el, index) => (
            <Box key={`image_${index}`}>
              <img src={el} width="100%" alt="product_image" loading="lazy" />
            </Box>
          ))}
        </Box>
        <Typography variant="h4" color="textSecondary">
          {`Offer: ${currency} ${offer?.price}`}
          {offer?.expires_at}
        </Typography>
        <Typography variant="h4" color="textSecondary">
          {`Price: ${currency} ${price}`}
        </Typography>
      </Paper>
    </Container>
  )
}

export default ProductDetail
