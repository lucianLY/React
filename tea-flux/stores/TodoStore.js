import {EventEmitter} from 'events'
import dispatcher from '../dispatcher.js'

class TodoStore extends EventEmitter {
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

   getAll (text) {
     return this.todos
   }

   createTodo (tt) {
     let id= Date.now()
     console.log(tt)
     this.todos.push({
       id : id,
       text : tt,
       complete : false
     })
     console.log(this.todos)
     this.emit("change")
   }

   handleActions (action) {
     console.log('TodoStore received an action ', action)
     switch (action.type) {
       case 'CREATE_TODO' : {
         this.createTodo(action.text)
         break
       }
       case 'RECEIVE_TODOS' : {
         this.todos =  action.todos
         break
       }
     }
   }
 }

 const todoStore = new TodoStore()
 dispatcher.register(todoStore.handleActions.bind(todoStore))
 window.dispatcher = dispatcher
 export default todoStore
 dispatcher.dispatch
