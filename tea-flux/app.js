import React from "react"
import AppStore from './stores/AppStore.js'

export default class DemoApp extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '',
      todos : AppStore.getTodos()
    }
  }

  createTodo (event) {
    console.log(event.target.value)
  }

  handleChange (event) {
   this.setState({value: event.target.value})
 }

 handleSubmit (event) {
   console.log(this.state.value)
   AppStore.CreateTodo(this.state.value)
   event.preventDefault()
 }

  render () {
    const {todos} = this.state
    let todoLists = todos.map((todo) =>
      <div key={todo.id} >
        <span>{todo.text}</span> | <span>x</span>
      </div>
    )

    return (
      <div>
        <h1>APP List</h1>
        <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>Create</h4>
          <label>
            Tag:
            <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)} />
          </label>
          <input type='submit' value='Create' />
        </form>
        </div>
        {todoLists}
      </div>
    )
  }
}
