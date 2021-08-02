import { Container } from '@material-ui/core'
import Banner from './components/Banner/Banner'
import ProductShuffle from './components/ProductShuffle'

export default function Home() {
  return (
    <Container>
      <Banner />
      <ProductShuffle />
    </Container>
  )
}
