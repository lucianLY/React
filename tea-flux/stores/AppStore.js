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
  }
  
}

let app = new AppStore()

export default app
