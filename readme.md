#React Tutorial
### 安装
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

##1) 初始 React
React是一个Javascript库，假设你了解基本的Javascript语法，但是并不是很理解，我建议可以先看一下Javascript的知识再继续学习React。我们也需要用到一些ES6的语法知识。
Ok，我们从一个最简单的例子开始学习，React。首先我们需要引用react.js、react-dom.js和babel.js三个js文件

```html
<div id="app"></div>
<script type="text/jsx">
ReactDOM.render(
  <h1>Hello React</h1>,
  document.getElementById('app')
)
</script>
```
刷新我们的页面，这样我们在页面上渲染出了‘Hello React’。
