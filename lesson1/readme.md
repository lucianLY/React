##初始React
我们推荐使用 Npm 来进行管理前端依赖库
```Javascript
npm install --save react react-dom -S
```
启用ES6和JSX
推荐使用React的Babel可以在代码中使用ES6和JSX。<br>
ES6是一套现代的Javascript风格，而JSX是Javascript的一个扩展让React变得更加灵活自如。
```Javascript
import React from 'react'
import ReactDOM from 'react-dom'
let Html = (
  <h1>Hello React</h1>
)
ReactDOM.render(
  Html,
  document.getElementById('app')
)
```
或者使用CDN(我们不是特别推荐)
```html
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
```
React是一个Javascript库，如果你了解基本的Javascript语法，但是并不是很理解，我建议可以先看一下Javascript的知识再继续学习React。学习React时也需要用到一些ES6的语法知识。<br>
Ok，我们从一个最简单的例子开始学习，React。首先我们需要引用react.js、react-dom.js和babel.js三个js文件。<br>
react.js是React核心库<br>
react-dom.js提供了与DOM有关的功能<br>
baber.js作用是讲JSX转化成javascript的语法<br>
注意：凡是使用JSX的语法都需要添加script type="text/jsx"，因为React独有的JSX语法跟javascript不兼容。
```html
<div id="app"></div>
<script type="text/jsx">
ReactDOM.render(
  <h1>Hello React</h1>,
  document.getElementById('app')
)
</script>
```
刷新我们的页面，这样我们在页面上渲染出了‘Hello React’。 (代码部分lesson1)<br>
