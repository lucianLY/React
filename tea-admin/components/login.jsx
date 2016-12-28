import React from "react"

export default class App extends React.Component {

  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername (event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword (event) {
    this.setState({
      password: event.target.value
    })
  }

  getFormData () {
    let arr = {
      user: this.state.username,
      password: this.state.password
    }
    fetch('http://localhost:8080/json/data.json',{
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (data) {
      console.log(data.json())
    })
  }

  render () {
    return (
      <div className='c-sign'>
        <div className='c-sign-title'>登录</div>
        <div className='c-sign-body'>
          <div className='c-sign-body-item'>
            <label className='c-sign-label'>
              <i class='fa fa-user' aria-hidden='true'></i>
            </label>
            <input type='text' className='c-sign-input' value={this.username} onChange={this.handleUsername.bind(this)}/>
          </div>
          <div className='c-sign-body-item'>
            <label className='c-sign-label'>
              <i class='fa fa-key' aria-hidden='true'></i>
            </label>
            <input type='password' className='c-sign-input' value={this.password} onChange={this.handlePassword.bind(this)} />
          </div>
          <div className='c-sign-body-item'>
            <button type='button' className='c-sign-btn' onClick={this.getFormData.bind(this)}>登录</button>
          </div>
        </div>
      </div>
    )
  }
}
