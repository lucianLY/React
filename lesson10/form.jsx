import React from 'react'
import ReactDOM from 'react-dom'

export default class HtmlForm extends React.Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }

  InputChange (event) {
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }

  getValue () {
    console.log(this.state.value)
  }

  render () {
    return (
      <div>
        <h1>React Form</h1>
        <form>
          <label>
            <input type='text' value={this.state.value} onChange={this.InputChange.bind(this)}/>
          </label>
          <button type='button' onClick={this.getValue.bind(this)}>Botton</button>
        </form>
      </div>
    )
  }
}
