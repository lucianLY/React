##React-router的介绍
本文介绍React里最重要的一部分，路由库 React-router，首先我们先进行安装操作。<br>
[备注: 请确保理解基本的React并且完成了案例一Coffee]
```Javascript
npm i react-router -S
```
安装一个本地服务我们使用webpack-dev-server
```Javascript
npm i webpack-dev-server -S
```
同时编辑一下package.json文件,在script中新增一条start
```Javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "webpack-dev-server --inline --content-base ."
},
```
全部安装完成之后在命令行工具里输入 npm start 开启服务<br>确保在完成所有练习前不要关闭它。可以在浏览器里输入[http://localhost:8080](http://localhost:8080)来访问。<br>
Router本身就是React的一个组件,首先我们新建一个app/index.jsx文件，在里面引入Router、Route、hashHistory。并在render渲染中使用Router这个组件
```Javascript
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Header from './components/header.jsx'

render((
  <Router history={hashHistory}>
    <Route path='/' component={Header} />
  </Router>
  ), document.getElementById('app')
)

```
好的，我们打开浏览器看一下。ok，现在页面上呈现出导航条。但是现在它们都是静态无连接，我想现在我们可以给它添加上连接了。<br>
我们先在components文件夹下复制进来header.jsx文件，同时新建coffee-college.jsx和coffee-circle.jsx两个文件。我们希望当点击咖学院的时候可以展示coffee-college里文件的内容，点击咖圈子的时候展示coffee-circle的内容。
