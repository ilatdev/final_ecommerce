import { useAppSelector } from '../../../app/hooks'
import { productsCount } from '../../../features/products/productsSlice'
import _ from 'underscore'
import ProductCard from '../../ProductCard'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  productShuffle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    maxWidth: 1400,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexGrow: 1,
    padding: '2rem 0'
  }
}))

export default function ProductShuffle() {
  const cls = useStyles()
  const { data } = useAppSelector(productsCount)

  const productShuffle = _.shuffle(data).slice(0, 4)

  return (
    <Box className={cls.productShuffle}>
      <Box className={cls.content}>
        {productShuffle.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </Box>
  )
}
