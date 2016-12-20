import {EventEmitter} from 'events'
import dispatcher from '../dispatcher.js'

class AppStore extends EventEmitter {
  constructor () {
    super()
    this.todos = [
      {
        id : 113,
        text: 'Go Shoping',
        complete : false
      },
      {
        id : 245,
        text : 'Pay Water Bills',
        complete : false
      }
    ]
  }

  getTodos = () => this.todos

  CreateTodo (text) {
    let todo = {
      id : Date.now(),
      text: text,
      complete : false
    }
    this.todos.push(todo)
    this.emit("change")
    console.log(this.todos)
  }

  RemoveTodo (id) {
    let todos = this.todos
    for ( let i = 0 ;i < todos.length; i++ ) {
      if( todos[i]['id'] == id ) {
        todos.splice(i,1)
      }
    }
    console.log(todos)
    this.todos = todos
    this.emit("change")
  }

  handleActions (app) {
    console.log(app)
    if( app.type == 'CREATE_TODO') {
      this.CreateTodo(app.text)
    }else if (app.type == 'REMOVE_TODO') {
      this.RemoveTodo(app.id)
    }
  }
}

let app = new AppStore()
dispatcher.register(app.handleActions.bind(app))
window.dispatcher = dispatcher
dispatcher.dispatch
export default app
