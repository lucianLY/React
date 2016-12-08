##呈现元素
元素是 React 里最小的单元，元素描述的内容将会呈现在页面上。它不像是 HTML 的 DOM 元素，React 元素是普通对象而且很容易创造。
回顾第一节中我们设置的 `index.html` 的一段代码。
```html
<div id='app'></div>
```
我们把 i d为 app 的 div 称之为根节点，所有的 React DOM 都将在这里呈现。React 元素的渲染需要使用 ReactDOM.render() 方法
```Javascript
ReactDOM.render(
  <h1>Hello React</h1>,
  document.getElementById('app')
)
```
React 是不可变的，我们只能创建一次，我们不能改变其中的子类和属性，每一个元素都像电影里的一帧。唯一的办法就是更新元素。
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
