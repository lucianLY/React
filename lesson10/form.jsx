import React from 'react'
import ReactDOM from 'react-dom'

export default class HtmlForm extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '',
      choosed: 'lime'
    }
  }

  InputChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  handleChange (event) {

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
          <label>
            <select value={this.state.choosed}  onChange={this.handleChange.bind(this)}>
              <option value='grapefruit'>Grapefruit</option>
              <option value='lime'>Lime</option>
              <option value='coconut'>Coconut</option>
              <option value='mango'>Mango</option>
            </select>
          </label>
          <button type='button' onClick={this.getValue.bind(this)}>Botton</button>
        </form>
      </div>
    )
  }
}
