import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Product } from '../features/products/productsSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 290
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))

const ProductCard: React.FC<Product> = ({
  id,
  currency,
  images,
  price,
  title,
  offer
}) => {
  const history = useHistory()
  const cls = useStyles()

  function goToProduct() {
    return history.push(`/product_detail/${id}`)
  }

  const viewPrice = offer ? offer.price : price

  return (
    <Box className={cls.root}>
      <Paper className={cls.content}>
        <Typography variant="subtitle1">{title}</Typography>
        <img src={images[0]} width="100%" alt="product_image" loading="lazy" />
        <Typography variant="button" color={offer ? 'error' : 'textSecondary'}>
          {`${currency} ${viewPrice}`}
        </Typography>
        <Button variant="contained" color="primary" onClick={goToProduct}>
          Details
        </Button>
      </Paper>
    </Box>
  )
}

export default ProductCard
