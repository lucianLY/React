import { applyMiddleware, createStore } from 'redux'

const reducer = (initialState = 1, action) => {
  if (action.type == 'INC') {
    return initialState + 1
  }else if (action.type == 'E'){
    throw new Error('AAAAAAA')
  }
  return initialState
}

const logger = (store) => (next) => (action) => {
  console.log('action fired', action)
  next(action)
}

const error = (store) => (next) => (action) => {
  try {
    next(action)
  }catch(e){
    console.log('AHHHHH!')
  }
}

const middleware = applyMiddleware(logger, error)

const store = createStore (reducer, 1, middleware)

store.subscribe(() => {
  console.log('store changed ' + store.getState())
})

store.dispatch({type:"INC"})
store.dispatch({type:"INC2"})
store.dispatch({type:"INC3"})
store.dispatch({type:"INC4"})
store.dispatch({type:"E"})
