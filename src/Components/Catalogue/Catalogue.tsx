import { Box, Container, makeStyles } from '@material-ui/core'
import { useAppSelector } from '../../app/hooks'
import { productsCount } from '../../features/products/productsSlice'
import ProductCard from '../ProductCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexGrow: 1
  }
}))

export default function Catalogue() {
  const cls = useStyles()
  const { data } = useAppSelector(productsCount)

  return (
    <Container maxWidth="xl">
      <Box m={1} p={1} className={cls.root}>
        {Object.values(data).map((product) => (
          <Box key={product.id} my={1}>
            <ProductCard {...product} />
          </Box>
        ))}
      </Box>
    </Container>
  )
}
