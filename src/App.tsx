import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './Components/Home/Home'
import CoreLayout from './Components/CoreLayout'
import { useEffect } from 'react'
import { useAppDispatch } from './app/hooks'
import { fetchProducts } from './features/products/productsSlice'
import ProductDetailRoute from './Components/ProductDetailRoute'
import { LoadingCircle } from './Components/LoadingCircle'
import Catalogue from './Components/Catalogue/Catalogue'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Router>
      <CoreLayout>
        <LoadingCircle>
          <Switch>
            <Route path={`/product_detail/:id`}>
              <ProductDetailRoute />
            </Route>
            <Route path="/catalogue">
              <Catalogue />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Redirect exact from="/" to="/home" />
          </Switch>
        </LoadingCircle>
      </CoreLayout>
    </Router>
  )
}

export default App
