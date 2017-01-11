import { createStore } from 'redux'

const reducer = (state = 1, action) => {
  if (action.type == 'INC') {
    return state + action.count
  }
  return state
}

const store = createStore (reducer, 1)

store.subscribe(() => {
  console.log('store changed ' + store.getState())
})

store.dispatch({type:"INC", count : 2})
