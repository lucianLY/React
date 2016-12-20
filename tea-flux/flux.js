import React from "react"
import * as TodoAction from './actions/TodoAction.js'
import TodoStore from './stores/TodoStore.js'

export default class Fetured extends React.Component {

  constructor () {
    super()
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount () {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    })
  }

  createTodo () {
    TodoAction.createTodo(Date.now())
  }
  reloadTodos () {
    TodoAction.reloadTodos()
  }

  render () {
    const {todos} = this.state
    let TodosMap = todos.map((todo) =>
      <div key={todo.id}>
      {todo.text} </div>
    )
    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>create</button>
        <h1>Todos</h1>
        {TodosMap}
      </div>
    )
  }

}
