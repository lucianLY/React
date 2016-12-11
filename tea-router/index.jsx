import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Header from './components/header.jsx'
import College from './components/coffee-college.jsx'
import Circle from './components/coffee-circle.jsx'
import Article from './components/article.jsx'
import Home from './components/home.jsx'

let routes = <Router path='/' component={Header}>
  <Route path='/circle' component={Circle} />
  <Route path='/college' component={College} />
</Router>

render((
  <Router routes={routes} history={browserHistory}>
    <IndexRoute component={Home}/>

  </Router>
  ), document.getElementById('app')
)
