import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { productsCount } from '../../features/products/productsSlice'
import Container from '@material-ui/core/Container'
import ProductDetail from './ProductDetail'

interface Params {
  id: string
}

export default function ProductDetailRoute() {
  const { data } = useAppSelector(productsCount)
  const { id }: Params = useParams()
  const currentId = Number(id)

  const SelectedProduct = Object.values(data).filter(
    (el) => el.id === currentId
  )[0]

  return (
    <Container>
      {SelectedProduct ? (
        <ProductDetail {...SelectedProduct} />
      ) : (
        <h2>{`Producto id:${id} no fue encontrado`}</h2>
      )}
    </Container>
  )
}
