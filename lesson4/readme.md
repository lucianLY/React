##组件和道具 Components and Props
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
