##介绍JSX
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