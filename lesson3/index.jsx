import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

class Layout extends React.Component {
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

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
)
