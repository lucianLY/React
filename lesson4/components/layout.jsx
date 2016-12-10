import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'

export default class Layout extends React.Component {
  constructor (name) {
    super()
    this.name = 'Lucian'
    this.state = {date : new Date()}
  }
  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    )
  }
  tick = () => {
    this.setState({
      date: new Date()
    });
  }
  render () {
    return (
      <div>
        <Header />
        <div>
          {this.state.date.toLocaleTimeString()}
        </div>
        <h1>Hello {this.name} </h1>
        <Footer />
      </div>
    )
  }
}
