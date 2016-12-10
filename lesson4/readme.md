##Reat的状态和声明周期 State and LifeCyle
如果我们想在网页里添加一条本地时间应该怎么做呢？<br>
首先打开 `layout.jsx` 文件，编辑一下我们的 render 部分
```Javascript
return (
  <div>
    <Header />
    <div>
      {new Date().toLocaleTimeString()}
    </div>
    <h1>Hello {this.name} </h1>
    <Footer />
  </div>
)
```
ok，我们发现这个时间并非是实时更新，那如何才能做到这一点呢？<br>
首先我们在构造函数 `constructor` 初始化 `time` 时间。
```Javascript
constructor (name) {
  super()
  this.name = 'Lucian'
  this.state = {date : new Date()}
}
```
我们准备给 `Clock` 做一个定时器当首次渲染 DOM 的时候，这个过程在 React 称之为 (mounting)。同时也需要一个方法当 DOM 被产生时我们将移除它。这个过程我们称之为卸载 (unmounting)。这些方法被称作生命周期钩子 (lifecycle hooks)
```Javascript
constructor (name) {
  super()
  this.name = 'Lucian'
  this.state = {date : new Date()}
}
componentDidMount () {

}
```
`componentDidMount` 组件加载完成之后执行<br>
最后我们实现一个tick的方法,我们将使用this.setState()方法来更新时间
```Javascript
componentDidMount() {
  setInterval(
    () => this.tick(),
    1000
  )
}
tick = () => {
  this.setState({
    date: new Date()
  });
}
```
组件的声明周期分成三个状态：<br>
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
