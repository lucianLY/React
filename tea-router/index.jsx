import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'
import Header from './components/header.jsx'
import College from './components/coffee-college.jsx'
import Circle from './components/coffee-circle.jsx'
import Article from './components/article.jsx'
import Home from './components/home.jsx'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={Header}>
      <IndexRoute component={Home} />
      <Route path='college' component={College} />
        <Route path='college/:Id' component={Article} />
      <Route path='circle' component={Circle} />
    </Route>
  </Router>
  ), document.getElementById('app')
)
