##React 组件
回顾一下之前写好的代码
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
class Layout extends React.Component {
  render () {
    return (
      <h1>Hello React</h1>
    )
  }
}
ReactDOM.render(
  <Layout />,
  document.getElementById('app')
)
```
在 React 中一切都是组件构成的，通过组件来渲染 React DOM。如果我们想渲染更多层级的 DOM 可以通过嵌套的方式来完成。如果说这样的来写代码那么系统将会报错。
```javascript
render () {
  return (
    <h1>Hello React</h1>
    <h1>Hello React</h1>
  )
}
```
所以只能通过嵌套的方式来构建 React DOM 结构
```javascript
render () {
  return (
    <div>
      <h1>Hello React</h1>
    <div>
  )
}
```
这样看起来感觉很容易做到。当然我们也可以使用变量。
```javascript
render () {
  const name = 'Lucian'
  return (
    <div>
      <h1>Hello {name}</h1>
    <div>
  )
}
```
其中这段代码语法既不是字符串也不是html
```Javascript
<h1>Hello {name}</h1>
```
这被称之为 JSX，JSX 是 Javascript 的语法扩展，我们推荐使用它来描述 React 里的 UI 结构。这里提示一下 JSX 是模板语言，同时也具备 Javascript 的全部功能。<br>
我们可以将 Javascript 表达式嵌入在 JSX 里通过大括号的形式书写。<br>
基本语法规则：遇到(<)开头就使用 html 规则解释；遇到({)卡特就用 javascript 规则解释。
除了变量，我们也可以使用方法。看下面的例子：
```Javascript
class Layout extends React.Component {
  getVal () {
    return 'Lucian'
  }
  render () {
    return (
      <h1>Hello {this.getVal()} </h1>
    )
  }
}
```
在这个类里边，也可以使用构造函数的方法来初始化一个 `name` 变量。我们需要使用 `constructor` 方法，这就是构造方法，`super` 关键字它在这里表示父类的构造函数用来新建父类的 `this` 对象。
```Javascript
class Layout extends React.Component {
  constructor (name) {
    super()
    this.name = 'Lucian'
  }
  render () {
    return (
      <h1>Hello {this.name} </h1>
    )
  }
}
```
注意：子类必须在 `constructor` 方法中调用 `super()`，否则新建实例会报错。这是因为子类没有自己的 `this` 对象，而是继承父类的 `this` 对象，而后对其加工，如果不调用 `super()` 子类就得不到 `this` 对象。<br>
其他案例：<br>
JSX 是对 Javascript 的扩展，同时它也支持表达式的写法比如 if for 等。
