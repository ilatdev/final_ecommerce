import { Box, Container, makeStyles } from '@material-ui/core'
import { useAppSelector } from '../../app/hooks'
import { productsCount } from '../../features/products/productsSlice'
import ProductCard from '../ProductCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexGrow: 1
  }
}))

export default function Catalogue() {
  const cls = useStyles()
  const { data } = useAppSelector(productsCount)

  return (
    <Container maxWidth="lg">
      <Box p={3} className={cls.root}>
        {Object.values(data).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </Container>
  )
}
