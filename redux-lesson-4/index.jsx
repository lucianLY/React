import { applyMiddleware,createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
  fetchcing: false,
  fetched: false,
  users:[],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_USERS" : {
      console.log(action.type)
      return {...state, fetchcing:true, users:action.payload}
      break
    }
    case "RECEIVE_ERROR" : {
      return {...state,fetchcing:false}
      break
    }
  }
  return state
}
const middleware = applyMiddleware(thunk, logger())
const store = createStore (reducer, middleware)

store.subscribe(() => {
  console.log('store changed ' + store.getState())
})

store.dispatch((dispatch) => {
  axios.get('http://rest.learncode.academy/api/wstern/users')
    .then((response) => {
      dispatch({type:'RECEIVE_USERS',payload: response.data})
    })
    .catch((err) => {
      dispatch({type:'RECEIVE_ERROR'})
    })
})
