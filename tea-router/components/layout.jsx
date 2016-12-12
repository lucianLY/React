import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Header from './header.jsx'
import College from './coffee-college.jsx'
import Circle from './coffee-circle.jsx'
import Article from './article.jsx'
import Home from './home.jsx'
import Footer from './footer.jsx'

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}
