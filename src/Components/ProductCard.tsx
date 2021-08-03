import {
  Box,
  ButtonBase,
  Divider,
  makeStyles,
  Typography
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Product } from '../features/products/productsSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    marginBottom: '1rem',
    border: '1px solid #d2d1e4',
    borderRadius: 5,
    '& :hover': {
      backgroundColor: '#e2e2e228'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  offer: {
    color: green[500]
  },
  hrLine: {
    backgroundColor: '#00000055'
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

  const ramdomImage = `${images[0]}?id=${id + 8}`

  return (
    <ButtonBase onClick={goToProduct} className={cls.root}>
      <Box>
        <Box className={cls.content}>
          <Typography variant="body1">{title}</Typography>
          <img
            src={ramdomImage}
            width="100%"
            alt="product_image"
            loading="lazy"
          />
        </Box>
        <Divider variant="fullWidth" />

        <Typography variant="h5" className={offer ? cls.offer : ''}>
          {`${currency}  ${offer?.price || price}`}
        </Typography>
      </Box>
    </ButtonBase>
  )
}

export default ProductCard
