import { applyMiddleware, createStore } from 'redux'

const reducer = (state = 0, action) => {
  if (action.type == 'INC') {
    return initialState + action.count
  }
  return initialState
}

const logger = (store) => (next) => (action) =>{
  console.log('action fired ', action)
  next(action)
}

const middleware = applyMiddleware(logger)
const store = createStore (reducer, 1, middleware)

store.subscribe(() => {
  console.log('store change ',store.getState())
})

store.dispatch({type:"INC", count : 1})
store.dispatch({type:"INC", count : 2})
store.dispatch({type:"INC", count : 3})
store.dispatch({type:"INC", count : 4})
