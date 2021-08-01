import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './Components/Home/Home'
import CoreLayout from './Components/CoreLayout'
import Detail from './Components/Detail'
import { useEffect } from 'react'
import { useAppDispatch } from './app/hooks'
import { fetchProducts } from './features/products/productsSlice'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Router>
      <CoreLayout>
        <Switch>
          <Route path={`/product_detail/:id`}>
            <Detail />
          </Route>
          <Route path="/catalogue">
            <h1>Catalogue</h1>
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
