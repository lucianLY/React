##列表渲染
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
