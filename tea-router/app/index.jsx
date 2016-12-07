import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Header from './components/header.jsx'
import College from './components/coffee-college.jsx'
import Circle from './components/coffee-circle.jsx'

let routes = <Router path='/' component={Header}>
  <Route path='/college' component={College} />
  <Route path='/circle' component={Circle} />
</Router>

render((
  <Router routes={routes} history={hashHistory}>
  </Router>
  ), document.getElementById('app')
)
