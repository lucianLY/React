import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'

export default class Layout extends React.Component {
  constructor (name) {
    super()
    this.name = 'Lucian'
  }
  render () {
    return (
      <div>
        <Header />
        <h1>Hello {this.name} </h1>
        <Footer />
      </div>
    )
  }
}
