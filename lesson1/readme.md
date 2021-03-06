##React安装
我们推荐使用 `npm` 进行安装操作。<br>
先来安装react 和 react-dom
```Javascript
npm i react react-dom -S
```
注意：我们推荐在 React 里使用 ES6 和 JSX 的代码。是因为ES6是一套现代的Javascript风格，而JSX是Javascript的一个扩展让React变得更加灵活自如。我们可以通过在项目中配置 Babel 来转义 ES6 和 JSX。所以我们需要在项目中安装 `babel-preset-es2015` 和 `babel-preset-reset` 。
```Javascript
npm i babel-preset-es2015 babel-preset-reset -S
```
同时配置一下.babelrc文件(Babel的配置文件是.babelrc，存放在项目根目录下).
```Javascript
{
  "presets" : ["es2015", "react"]
}
```
webpack 是React的一个好帮手，我们可以用它来构建我们需要改的文件。
```Javascript
npm i webpack -S
```
好了，基本的安装都完成了。<br>
接下来需要编辑一下webpack.config.js文件。
```Javascript
var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry : './lesson1/index.jsx',
  output : {
    path : 'bundle',
    filename : 'bundle.js'
  },
  module : {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  }
}
```
完成这些安装之后，我们先检查一下我们刚刚所配置的是否正确。在lesson1里新建一个`index.jsx`文件。并在里边写一行代码 `console.log('Hello React')`。然后我们在命令行里执行一下 `webpack` 。所生成的文件会在 `bundle` 文件夹里。<br>
同时，我们在根目录下新建 `index.html` 文件。引入我们 bundle 里的 js 文件。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Coffee</title>
  </head>
  <body>
    <script src='./bundle/bundle.js'></script>
  </body>
</html>
```
ok,浏览器打开文件可以在控制台输出我们缩写的。这样，基本的React安装就完成了。那么 React 构建一个单页面项目呢？我们需要继续更新一下我们的代码。编辑 `lesson1/index.jsx` 文件。
```Javascript
import React from 'react'
import ReactDOM from 'react-dom'
class Layout extends React.Component {
  render () {
    return (
      <h1>Hello React</h1>
    )
  }
}
ReactDOM.render(
  <Layout />,
  document.getElementById('app')
)
```
以及在根目录的 `index.html` 文件。
```html
<body>
  <div id="app"></div>
  <script src='./bundle/bundle.js'></script>
</body>
```
再次执行 `webpack` 命令，我们的 `Hello React` 出现了。<br>
元素是 React 里最小的单元，元素描述的内容将会呈现在页面上。它不像是 HTML 的 DOM 元素，React 元素是普通对象而且很容易创造。
在 `index.html` 文件里。
```html
<div id='app'></div>
```
我们把 id 为 app 的 div 称之为根节点，所有的 React DOM 都将在这里呈现。React 元素的渲染需要使用 `ReactDOM.render()` 方法
```Javascript
ReactDOM.render(
  <h1>Hello React</h1>,
  document.getElementById('app')
)
```
能不能有一个办法，不使用直接运行文件的方法运行我们的 `index.html` 文件呢？当然可以，我们需要安装 `webpack-dev-server` 的服务来帮助我们。在命令行里执行
```Javascript
npm i webpack-dev-server -S
```
同事修改一下 `package.json` 文件
```Javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "webpack-dev-server --content-base src --inline --hot",
}
```
在命令行里输入 `webpack-dev-server` 同时使用 [http://localhost:8080/](http://localhost:8080/) 访问项目
