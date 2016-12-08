import React from 'react'
import ReactDOM from 'react-dom'

function formatName (user) {
  return user.fristName + ' ' + user.lastName
}
let user = {
  fristName : 'Lucian',
  lastName : 'Yang'
}
//使用圆括号是增强了JSX的可读性当然这不是强制性
let element = (
  <h1>Hello {formatName(user)}</h1>
)

ReactDOM.render(
  element,
  document.getElementById('app')
)
