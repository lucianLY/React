##呈现元素
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
