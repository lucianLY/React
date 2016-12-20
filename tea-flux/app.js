import React from "react"
import AppStore from './stores/AppStore.js'
import * as AppAction from './actions/AppAction.js'

export default class DemoApp extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '',
      todos : AppStore.getTodos()
    }
  }
  componentWillMount () {
    AppStore.on('change', () => {
      this.setState({
        todos: AppStore.getTodos()
      })
    })
  }

  createTodo (event) {
    console.log(event.target.value)
  }

  removeTodo (e) {
    AppAction.RemoveTODO(e)
  }

  handleChange (event) {
   this.setState({value: event.target.value})
  }

   handleSubmit (event) {
     event.preventDefault()
     console.log(this.state.value)
     AppAction.CreateTODO(this.state.value)
   }

  render () {
    const {todos} = this.state
    let todoLists = todos.map((todo) =>
      <div key={todo.id} >
        <span>{todo.text}</span> | <span onClick={this.removeTodo.bind(null, todo.id)}>x</span>
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
