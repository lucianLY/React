import { createStore } from 'redux'

const reducer = (initialState = 1, action) => {
  if (action.type == 'INC') {
    return initialState + action.count
  }
  return initialState
}

const store = createStore (reducer, 1)

store.subscribe(() => {
  console.log('store changed ' + store.getState())
})

store.dispatch({type:"INC", count : 2})
