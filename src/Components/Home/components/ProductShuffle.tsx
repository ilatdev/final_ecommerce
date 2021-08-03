import { useAppSelector } from '../../../app/hooks'
import { productsCount } from '../../../features/products/productsSlice'
import _ from 'underscore'
import ProductCard from '../../ProductCard'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexGrow: 1,
    margin: '1rem 0'
  }
}))

export default function ProductShuffle() {
  const cls = useStyles()
  const { data } = useAppSelector(productsCount)

  const productShuffle = _.shuffle(data).slice(0, 4)

  return (
    <Box className={cls.root}>
      {productShuffle.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Box>
  )
}
