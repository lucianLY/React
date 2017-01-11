##Redux
基本概念和 API
Store 是保存数据的地方，我们可以把他看成一个容器。在整个应用中只有一个Store，Redux 提供了 createStore 这个函数。
```Javascript
import { createStore } from 'redux'
const store = createStore(....)
```
State 包含所有数据，当前时刻的State 可以用 store.getState() 获取
```Javascript
import { createStore } from 'redux'
const store = createStore(....)
const state = store.getState()
```
Redux 规定，一个State对应一个View，State和View 双向绑定。
Action 通知 State 发生变化，Action 是一个对象，其中的 type 属性是必须的，表示Action 的名称。
```Javascript
const action = {
  type : 'ADD',
  payload : 1
}
```
store.dispatch() 是view发出Action的唯一方法
```Javascript
store.dispatch({type:"INC", count : 2})
```
Reducer 是一个函数，接受来自Action 和当前 State 作为参数，并返回一个新的State。
```Javascript
const reducer = (state = 1, action) => {
  if (action.type == 'INC') {
    return state + action.count
  }
  return state
}
```
createStore 接受 Reducer 做参数，
store.subscribe()
store 允许使用 store.subscribe 方法监听函数，如果一旦发生变化就执行这个函数。
```Javascript
store.subscribe(() => {
  console.log('store changed ' + store.getState())
})
```
