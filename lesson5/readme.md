##Reat的状态和声明周期 State and LifeCyle
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
