import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './Components/Home/Home'
import CoreLayout from './Components/CoreLayout'

function App() {
  return (
    <Router>
      <CoreLayout>
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
      </CoreLayout>
    </Router>
  )
}

export default App
