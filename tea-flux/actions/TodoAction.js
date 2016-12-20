import dispatcher from '../dispatcher.js'
export function createTodo (text) {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text
  })
}

export function deleteTodo (id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  })
}

export function reloadTodos () {
  // axios('http://localhost:8080/css/json.js').then( (data) => {
  //   console.log(data)
  // })
  dispatcher.dispatch({
    type: 'FETCH_TODO'
  })
  setTimeout( () => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos : [
      {
        id : 1113,
        text: 'Go Shoping hh',
        complete : false
      },
      {
        id : 1245,
        text : 'Pay Water Bills',
        complete : false
      }
    ]})
  }, 1000)
}
