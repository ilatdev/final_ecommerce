import { Box, makeStyles } from '@material-ui/core'
import { useAppSelector } from '../app/hooks'
import { productsCount } from '../features/products/productsSlice'
import ProductCard from './ProductCard'

const useStyles = makeStyles((theme) => ({
  catalogueRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1
  },
  catalogueContent: {
    maxWidth: 1440,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
}))

export default function Catalogue() {
  const cls = useStyles()
  const { data } = useAppSelector(productsCount)

  return (
    <Box className={cls.catalogueRoot}>
      <Box className={cls.catalogueContent}>
        {Object.values(data).map((product) => (
          <Box key={product.id} my={1}>
            <ProductCard {...product} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
