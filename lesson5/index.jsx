import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date : new Date()}
  }
  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render () {
        return (
          <div>
            <h1>Local Time</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
          </div>
        )
  }
}

ReactDOM.render (
  <Clock />,
  document.getElementById('app')
)
