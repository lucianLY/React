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
JSX 是对 Javascript 的扩展，同时它也支持表达式的写法比如 if for 等。<br>
扩展阅读<br>
React 里所有的一切都是组件。我们把组件拆分为独立的 UI，具有可重复性并且相互独立。从定义上来看，组件更像是 Javascript 的方法，他们接受任何的道具并且返回呈现在页面上的 React 元素。
最简单的方法是定义一个Javascript函数
```Javascript
function Welcome (props) {
  return <h1>Hello, {props.name} </h1>
}
```
这个函数是有效的 React 组件，因为他接受了一个 props 对象作为参数，并且返回了一个 React 元素，我们称像这样的组件称之为“功能”，因为他们更像是 Javascript 的函数。同样我们也可以按照 ES6 类来定义组件
```Javascript
class Welcome extend React.Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```
以上两种写法在 React 中都是等价的，在 React 中我们更倾向于使用 ES6 的写法。<br>
之前，我们只遇到了 React 代表 DOM 标签，现在元素也可以代表自定义组件。当 React 发现元素代表了一个自定义标签时，它将通过 JSX 的属性传递给组件一个对象，我们称这样的对象是”道具”。例如
```Javascript
function Welcome (props) {
  return <h1>Hello, {props.name} </h1>
}
let Element = <Welcome name='Ben' />
ReactDOM.render(
  Element,
  document.getElementById('app')
)
```
好了，让我们看看这个过程都发生了什么？<br>
首先我们调用 `ReactDOM.render()` 通过 `<Welcome name='Ben' />` 元素。当 React 发现 Welcome 是组件时变化 `{name:'Ben'}` 对象看做道具，Welcome 的组件同时返回了一个新的元素结果，React DOM 更新了页面。<br>
需要注意的是，自定义组件使用了首字母大写方式，而小写的则代表了 DOM。<br>
看这段代码~
```Javascript
function Comment(props) {
  return (
    <div className="UserInfo">
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    </div>
  );
}
```
上面代码中元素被嵌套了两层，我们想更好的拆分他们，使之变得更独立。
```Javascript
function Comment(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author}/>
    </div>
  );
}
function Avatar (props) {
  retuen (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}
```
整理一下我们的代码。
```Javascript
function Comment(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author}/>
    </div>
  );
}
function Avatar (props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}
let comment = {
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
let element = <Comment author={comment.author}/>
ReactDOM.render(
  element,
  document.getElementById('app')
)
```
