import { useAppSelector } from '../../../app/hooks'
import { productsCount } from '../../../features/products/productsSlice'
import _ from 'underscore'
import ProductCard from '../../ProductCard'
import { Box } from '@material-ui/core'

export default function ProductShuffle() {
  const { data } = useAppSelector(productsCount)

  const productShuffle = _.shuffle(data).slice(0, 4)

  return (
    <div>
      <Box display="flex" flexWrap="wrap" justifyContent="center" flexGrow="1">
        {productShuffle.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </div>
  )
}
