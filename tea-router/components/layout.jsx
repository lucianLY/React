import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Header from './header.jsx'
import College from './coffee-college.jsx'
import Circle from './coffee-circle.jsx'
import Article from './article.jsx'
import Home from './home.jsx'


export default class Layout extends React.Component {

  render () {
    let routes = <Router path='/' component={Header}>
      <Route path='/circle' component={Circle} />
      <Route path='/college' component={College} />
    </Router>
    return (
      <Router routes={routes} history={browserHistory}>
        <IndexRoute component={Home}/>

      </Router>
    )
  }
}
