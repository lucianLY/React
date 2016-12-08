import React from 'react'
import ReactDOM from 'react-dom'

class Layout extends React.Component {
  constructor (name) {
    super()
    this.name = 'Lucian'
  }
  render () {
    return (
      <div>
        <h1>Hello {this.name} </h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
)
