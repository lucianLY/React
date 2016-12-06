##1) 安装
我们推荐使用npm来进行管理前端依赖库
```Javascript
npm install --save react react-dom
```
启用ES6和JSX
我们推荐使用React的Babel可以在代码中使用ES6和JSX。ES6是一套现代的Javascript风格使得开发变得更容易，而JSX是Javascript的一个扩展让React变得更加灵活自如。
```Javascript
import React from 'react'
import ReactDOM from 'react-dom'
let html = (
  <h1>Hello React</h1>
)
ReactDOM.render(
  html,
  document.getElementById('app')
)
```
使用CDN
```html
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
```
