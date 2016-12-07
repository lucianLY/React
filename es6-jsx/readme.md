##React中的 ES6 和 JSX
通常来说我们使用 Javascript 类定义 React 组件
```Javascript
class Greeting extends React.Component {
  render () {
    return (
      <h1>Hello React</h1>
    )
  }
}
```
如果不使用ES6语法，相当于这样定义
```Javascript
var Greeting = React.createClass({
  render: function () {
    return <h1>Hello React</h1>
  }
})
```
ES6 API里像 React.createClass 一样，只有少数几个。<br>
在函数和 ES6 的类中，通过他们的组件来定义 propTypes 和 defaultProps
```Javascript
class Greeting extends React.Component {

}
Greeting.propTypes = {
  name : 'Lucian'
}
Greeting.defaultProps = {

}
```
如果使用 React.createClass() 我们需要确定 propTypes 和 defaultProps 在对象里，并通过 getDefaultProps() 方法实现
```Javascript
var Greeting = React.createClass({
  propTypes : {
    name : React.PropTypes.string
  }
  getDefaultProps : function () {
    return {
      name : 'Lucian'
    }
  }
})
```
在ES6类中，你可以通过构造函数 this.state 初始化
```Javascript
class Greeting extends React.Component {
  constructor (props) {
    super(props)
    this.state = {name : this.props.name}
  }
}
```
在 React.createClass() 函数中是使用方法并且返回它。
```Javascript
var Greeting = React.createClass({
  return { name : this.props.name}
})
```
JSX 不是 React 所必需的。使用 React 和 JSX 是特别的方便当你想设置你的构建环境<br>
每一个JSX元素仅仅是一个语法糖，所以一切都可以用过 JSX 实现也可以视为Javascript的扩展。
```Javascript
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```
如果不使用JSX
```Javascript
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```
