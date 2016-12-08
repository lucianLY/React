import React from 'react'
import ReactDOM from 'react-dom'

class Toggle extends React.Component {
  state = {
    isToggleOn : true
  }

  handleClick = () => {
    let isToggleOn = !this.state.isToggleOn
    this.setState({isToggleOn})
  }

  render () {
    return (
      <button onClick = {this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
)
