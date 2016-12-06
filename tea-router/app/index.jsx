import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Header from './components/header.jsx'
import CoffeeCollege from './components/coffee-college.jsx'
import CoffeeCircle from './components/coffee-circle.jsx'

render((
  <Router history={hashHistory}>
    <Route path='/' component={Header} />
    <Route path='/college' commponent={CoffeeCollege} />
    <Route path='/circle' commponent={CoffeeCircle} />
  </Router>
  ), document.getElementById('app')
)
