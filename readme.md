#React 快速入门
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

##2) 初始 React
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
##3) 介绍JSX
这段代码语法既不是字符串也不是html
```Javascript
var element = <h1>Hello React</h1>
```
这被称之为JSX，JSX是Javascript的语法扩展，我们推荐使用它来描述React里的UI结构。这里提示一下JSX是模板语言，同时也具备javascript的全部功能。
我们可以将Javascript表达式嵌入在JSX里通过大括号的形式书写。
```Javascript
function formatName (user) {
  return user.fristName + ' ' + user.lastName
}
let user = {
  fristName : 'Herper',
  lastName : 'Perez'
}
//使用圆括号是增强了JSX的可读性当然这不是强制性
let element = (
  <h1>Hello {formatName(user)}</h1>
)
ReactDOM.render(
  element,
  document.getElementById('app')
)
```
JSX同时也支持表达式的写法比如 if for 等。
```Javascript
function formatName (user) {
  if (user) {
    return user.fristName + ' ' + user.lastName
  }else{
    return 'stranger'
  }
}
```
指定属性JSX
```Javascript
let element = <div tabIndex = '1' ></div>
```
指定子类JSX
如果单标签需要使用 /> 结束掉。类型XML的写法。
```Javascript
let element = <img src={user.avatarUrl} />
```
##4) 呈现元素
元素是React里最小的单元，元素描述的内容将会呈现在页面上。它不像是浏览器的DOM元素，React元素是普通对象而且很容易创造。
首先让我们看一下如何在DOM中渲染React元素。
```html
<div id='app'></div>
```
我们把id为app的div称之为根节点，所有的React DOM都将在这里呈现。React 元素的渲染需要使用ReactDOM.render()方法
```Javascript
ReactDOM.render(
  <h1>Hello React</h1>,
  document.getElementById('app')
)
```
更新元素
React是不可变的，我们只能创建一次，我们不能改变其中的子类和属性，每一个元素都像电影里的一帧。唯一的办法就是更新元素。
```Javascript
function tick () {
  let element = (
    <div>
      <h1>Local Time</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(
    element,
    document.getElementById('app')
  )
}

setInterval(tick, 1000)
```
