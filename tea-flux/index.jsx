import React from "react"
import ReactDOM from 'react-dom'
import Fetured from './flux.js'
let TodoApp = Fetured
let App = () => {
  let TodoMaps = TodoStore.getAll().map((val, index) =>
    <div key={index}>
      {val.text}
    </div>
  )
  return (
    <div className = 'main'>
      <h1>Todo</h1>
      {TodoMaps}
    </div>
  )
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
)
