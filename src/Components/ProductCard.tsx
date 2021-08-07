import { Box, ButtonBase, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Product } from '../features/products/productsSlice'

const useStyles = makeStyles((theme) => ({
  productCard: {
    maxWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.secondary.light,
    borderRadius: 25,
    boxShadow: theme.shadows[1],
    backgroundColor: '#f7f7f7'
  },
  media: {
    maxWidth: '100%',
    borderRadius: '25px 25px 0 0'
  },
  description: {
    padding: theme.spacing(1)
  },
  title: {
    fontWeight: 400
  },
  price: {
    display: 'flex',
    padding: theme.spacing(1),
    justifyContent: 'center'
  },
  prevPrice: {
    marginRight: 5,
    fontSize: 12,
    textDecoration: 'line-through'
  },
  offerPrice: {
    color: '#08b179'
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

  const offerPrice = (
    <>
      <Typography className={cls.prevPrice}>
        {`${currency}  ${price}`}
      </Typography>
      <Typography variant="h6" className={cls.offerPrice}>
        {`${currency}  ${offer?.price}`}
      </Typography>
    </>
  )

  return (
    <Box
      component={ButtonBase}
      className={cls.productCard}
      onClick={goToProduct}>
      <Box>
        <img
          className={cls.media}
          src={ramdomImage}
          alt="product_image"
          loading="lazy"
        />
      </Box>
      <Box className={cls.description}>
        <Typography className={cls.title}>{title}</Typography>
        <Box className={cls.price}>
          {offer ? (
            offerPrice
          ) : (
            <Typography variant="h6">{`${currency}  ${price}`}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ProductCard
