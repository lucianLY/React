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
React是一个Javascript库，如果你了解基本的Javascript语法，但是并不是很理解，我建议可以先看一下Javascript的知识再继续学习React。学习React时也需要用到一些ES6的语法知识。
Ok，我们从一个最简单的例子开始学习，React。首先我们需要引用react.js、react-dom.js和babel.js三个js文件。react.js是React核心库，react-dom.js提供了与DOM有关的功能，baber.js作用是讲JSX转化成javascript的语法。
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
刷新我们的页面，这样我们在页面上渲染出了‘Hello React’。 (代码部分lesson1)
##3) 介绍JSX
这段代码语法既不是字符串也不是html
```Javascript
var element = <h1>Hello React</h1>
```
这被称之为JSX，JSX是Javascript的语法扩展，我们推荐使用它来描述React里的UI结构。这里提示一下JSX是模板语言，同时也具备javascript的全部功能。
我们可以将Javascript表达式嵌入在JSX里通过大括号的形式书写。
基本语法规则：遇到(<)开头就使用html规则解释；遇到({)卡特就用javascript规则解释。
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
代码部分 lesson2
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
代码部分 lesson 3
##5) 组件和道具 Components and Props
组件让我们拆分为独立的UI，具有可重复性并且相互独立。从定义上来看，组件更像是Javascript的方法，他们接受任何的道具并且返回呈现在页面上的React元素。
最简单的方法是定义一个Javascript函数
```Javascript
function Welcome (props) {
  return <h1>Hello, {props.name} </h1>
}
```
这个函数是有效的React组件，因为他接受了一个props对象作为参数，并且返回了一个React元素，我们称像这样的组件为“功能”，因为他们更像是Javascript的函数。同样我们也可以按照ES6类来定义组件
```Javascript
class Welcome extend React.Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```
以上两种写法在React中都是等价的。类中附加功能我们讲在后边继续讲。
之前，我们只遇到了React代表DOM标签，现在元素也可以代表自定义组件。当React发现元素代表了一个自定义标签时，它将通过JSX的属性传递给组件一个对象，我们称这样的对象是”道具”。例如
```Javascript
function Welcome (props) {
  return <h1>Hello, {props.name} </h1>
}
let element = <Welcome name='Ben' />
ReactDOM.render(
  element,
  document.getElementById('app')
)
```
好了，让我们看看这个过程都发生了什么？
首先我们调用ReactDOM.render()通过<Welcome name='Ben' />元素。当React发现Welcome是组件时变讲{name:'Ben'}对象看做道具，Welcome的组件同时返回了一个
```html
<h1>Hello, Ben</h1>
```
的元素结果，React DOM更新了页面。
需要注意的是，自定义组件使用了首字母大写方式，而小写的则代表了DOM。
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
##6) Reat的状态和声明周期 State and LifeCyle
让我们继续回到第四节中的例子，看一下这段代码。目前我们只知道用这种方式来渲染UI，我们调用ReactDOM.render()来渲染输出。
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
在这一节中，我们将制作一个可复用、封装的组件。首先我们需要将之前的函数转换成类，该怎么改写呢？
1、创建一个ES6的类并继承React.Comment
2、添加一个空的单一方法命名叫render()
3、移除原来的render()方法
4、使用this.props替换props
5、删除掉剩余的方法
```Javascript
function Clock (props) {
  return (
    <div>
      <h1>Local Time</h1>
      <h2>
        {props.date.toLocaleTimeString()}
      </h2>
    </div>
  )
}

class Clock extends React.Component {
  render () {
        <div>
          <h1>Local Time</h1>
          <h2>{this.props.date.toLocaleTimeString()}</h2>
        </div>
  }
}
```
接下来分三步提出data从原有的代码中
1、使用this.state.date代替this.props.date
2、添加一个类的构造方法constructor 初始化 this.state的值为当前时间
3、移除<Clock />里的变量
```Javascript
class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date : new Date()}
  }

  render () {
        return (
          <div>
            <h1>Local Time</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
          </div>
        )
  }
}

function tick () {
  ReactDOM.render (
    <Clock />,
    document.getElementById('app')
  )
}
setInterval(tick,1000)
```
OK，我们的任务完成了，但是发现时间是静止的。这个如何解决呢？这时候我们需要添加一个生命周期的方法来解决了。对于包含大量组件的应用，组件销毁时清理相应的资源是非常重要的步骤。。我们准备给Clock做一个定时器当首次渲染DOM的时候，这个过程在React称之为【mounting】。同时也需要一个方法当DOM被产生时我们将移除它。这个过程我们称之为卸载【unmounting】。这些方法被称作生命周期钩子 【lifecycle hooks】
```Javascript
class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date : new Date()}
  }
  componentDidMount () {

  }
  componentWillUnmount () {

  }
  render () {
        return (
          <div>
            <h1>Local Time</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
          </div>
        )
  }
}
```
在componentDidMount()钩子是组件输出后渲染到页面
```Javascript
componentDidMount() {
  this.timeID = setInterval(
    () => this.tick(),
    1000
  )
}
```
需要注意的是我们这里直接通过this保存了一个time ID
```Javascript
componentWillUnmount() {
  clearInterval(this.timeID);
}
```
最后我们实现一个tick的方法,我们将使用this.setState()方法来更新时间
```Javascript
tick () {
  this.setState({
    date : new Date()
  })
}
```
整理一下代码
```Javascript
class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date : new Date()}
  }
  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render () {
        return (
          <div>
            <h1>Local Time</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
          </div>
        )
  }
}

ReactDOM.render (
  <Clock />,
  document.getElementById('app')
)
```
回顾一下刚刚的代码都做了那些事情。
1、当执行在React。render()里的<Clock />时候，React首先调用Clock组件constructor，当需要显示当前时间时候，先初始化了this.state给予了一个包含当前世界的对象。
2、接下来React调用render()方法，这个方法将直接显示在页面上并将稍后更新状态。
3、当Clock输出到DOM时，React调用了componentDidMount()生命周期钩子，在Clock组件里会每秒询问浏览器回调tick方法。
4、每次浏览器去回调tick方法时Clock组件都会去执行setState更新当前时间对象。React发现状态改变了，会再一次调用render方法。这时候,在render()里的this.date.date是不一样的，React渲染输出更新时间。
5、如果CLock组件移除了DOM，React将回调componentWillUnmount()生命周期钩子，这个时间则停止。
组件的声明周期分成三个状态：
```Javascript
  Mounting : 已插入DOM
  Updating : 正在被渲染
  Unmounting : 已移除真是DOM
```
React为每个状态都提供两个处理函数 will 函数在进入状态之前调用，did 函数进入状态之后调用。
```Javascript
  componentWillMount()
  componentDidMount()
  conponentWillUpdate(object nextProps, object prevState)
  conponentdidlUpdate(object nextProps, object prevState)
  componentWillUnmount()
```
##6) React的事件 Handling Events
React事件和DOM事件一样，只是有一些语法不同而已。
  React事件命名使用驼峰式而不是小写。
  通过JSX传递事件方法而不是字符串
例如：
```html
<button onclick='activateLasers()'></button>
```
如果写成JSX格式
```html
<button onClick='{activateLasers}'></button>
```
好的，我们使用ES6制作一个简单的切换试试。
```Javascript
class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn : true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render () {
    return (
      <button onClick = {this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
)
```
上面代码中，我们使用了this。在Javascript里，类方法默认是不被绑定的。如果你忘记绑定this.handleClick那么在调用函数时将会出现undefined。
如果将我们的代码优化一起其实可以这样~~
```Javascript
class Toggle extends React.Component {
  state = {
    isToggleOn : true
  }

  handleClick = () => {
    let isToggleOn = !this.state.isToggleOn
    this.setState({isToggleOn})
  }

  render () {
    return (
      <button onClick = {this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
)
```
代码参见 lesson 6
##7) 条件渲染 Conditional Rendering
React中可以使用不同的组件，提供了条件渲染的行为，可以使用javascript中的if来完成。
改造一下上节课的代码。
```javascript
class Login extends React.Component {
  state = {
    isToggle : false
  }
  userLogin =() => {
    let isToggle = !this.state.isToggle
    this.setState({isToggle})
  }
  render () {
    return (
      <div>
        <Greeting isToggle={this.state.isToggle}/>
        <button onClick = {this.userLogin}>登录</button>
      </div>
    )
  }
}
function Greeting (props) {
  if( props.isToggle ){
    return <h1>Welcome Back!</h1>
  }else{
    return <h1>Please Sing up.</h1>
  }
}
ReactDOM.render(
  <Login />,
  document.getElementById('app')
)
```
##7) 列表渲染
在javascript中我们可以使用map()方法进行遍历。同样，在JSX中也会有一个map方法。简单的看一下代码：
```javascript
let items = [1,2,3,4,5,6,7,8,9]
let listItems = items.map((number) =>
  <li>{number}</li>
)
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('app')
)
```
通常我们会把上边的代码放到一个组件里去完成。我们可以写一个list的组件来完成：
```javascript
let items = [1,2,3,4,5,6,7,8,9]
function List (props) {
  let items = props.items
  let listItems = items.map((number,index) =>
    <li key = {index}>
      {index}--{number}
    </li>
  )
  return (
    <li>{listItems}</li>
  )
}
ReactDOM.render(
  <List items = {items}/>,
  document.getElementById('app')
)
```
代码部分 lesson 8
##8) 表单
html的表单和React表单还是略有不同。在html里像<input>,<textarea>,<select>通常保持着自己的状态基于用户输入而更新。在React中，可变的状态是通常是保存在组件中。仅依靠setState()完成。
##9) 
