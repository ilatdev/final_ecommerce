import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/product_detail">
          <h1>Product detail</h1>
        </Route>
        <Route path="/catalogue">
          <h1>Catalogue</h1>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  )
}

export default App
