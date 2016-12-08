##条件渲染 Conditional Rendering
React 中可以使用不同的组件，提供了条件渲染的行为，可以使用 javascript 中的 if 来完成。<br>
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
