import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogList from './components/BlogList'
import BlogItemDetails from './components/BlogItemDetails'

import './App.css'

const App = () => (
  <Router>
  <div className="app-container">
    <div className="app-card">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/ApiBlogsFetch/" component={BlogList} />
          <Route exact path="/ApiBlogsFetch/about" component={About} />
          <Route exact path="/ApiBlogsFetch/contact" component={Contact} />
          <Route exact path="/ApiBlogsFetch/blog/:id" component={BlogItemDetails} />
          <Route exact path='/ApiBlogsFetch/:x' component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
  </Router>
)

export default App
