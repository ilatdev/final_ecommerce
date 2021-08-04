import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './Components/Home'
import CoreLayout from './Components/CoreLayout'

import { useAppDispatch } from './app/hooks'
import { fetchProducts } from './features/products/productsSlice'
import ProductDetail from './Components/ProductDetail'
import { LoadingCircle } from './Components/LoadingCircle'
import Catalogue from './Components/Catalogue'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Router>
      <CoreLayout>
        <LoadingCircle />
        <Switch>
          <Route path={`/product_detail/:id`}>
            <ProductDetail />
          </Route>
          <Route path="/catalogue">
            <Catalogue />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Redirect exact from="/" to="/home" />
        </Switch>
      </CoreLayout>
    </Router>
  )
}

export default App
