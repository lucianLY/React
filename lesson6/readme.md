##React的事件 Handling Events
React 事件和 DOM 事件一样，只是有一些语法不同而已。<br>
  React 事件命名使用驼峰式而不是小写。<br>
  通过 JSX 传递事件方法而不是字符串<br>
例如：
```html
<button onclick='activateLasers()'></button>
```
如果写成 JSX 格式
```html
<button onClick='{activateLasers}'></button>
```
好的，我们使用 ES6 制作一个简单的切换试试。
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
上面代码中，我们使用了 this。在 Javascript 里，类方法默认是不被绑定的。如果你忘记绑定 this.handleClick 那么在调用函数时将会出现 undefined。<br>
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
