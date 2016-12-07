#React 项目实战
##案例一  单页面应用 React.js环境下使用Npm, Babel和Webpack
首先我们开启这个demo。首先新建项目文件夹tea，并在其中安装react和react-dom。
```javascript
  mkdir tea
  cd tea
  npm i react react-dom -S
```
然后在里边新建bundle、css、js、images等子文件夹，并且初始化一个package.json的文件(备注：这个设置可以全部next)
```javascript
  npm init
```
这些都完成之后，我们开始安装webpack。安装完成之后在项目根目录下设置一个webpack.config.js文件。
```javascript
  npm i webpack -S
```
更新我们的webpack.config.js文件
```javascript
var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'bundle')
var APP_DIR = path.resolve(__dirname, 'js')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
}
module.exports = config
```
注意：我们这里只是简单的配置了一下webpack里的入口和出口。为了验证我们的配置是否正确我们先在js文件夹下建立一个index.jsx的文件。并在里边写一行代码
```Javascript
  console.log('hello')
```
ok，一切准备就绪。那我们就可以把已经写好的代码copy进去了。这时候需要我们babel的支持了
```Javascript
  npm i babel-loader babel-preset-es2015 babel-preset-react -S
```
我们需要一个配置文件，新建.babelrc文件，并在里边初始化
```Javascript
{
  "presets" : ["es2015", "react"]
}
```
同时更新我们的webpack.
```Javascript
// Existing Code ....
var config = {
  // Existing Code ....
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
}
```
具体代码参见tea 文件夹下的内容。<br>
附件：<br>
接下来我们看看刚刚做了哪些<br>
.babelrc是Babel的配置文件，存放在项目根目录下。使用Babel的第一步就是配置这个文件，该文件是用来设置转码规则和插件。
```Javascript
{
  "presets" : [],
  "plugins" : []
}
```
babel-loader的作用: 可以把ES6的代码编译成ES5代码来使用<br>
babel-preset-es2015的作用: 字段转换的规则<br>
babel-preset-react的作用: 解析转换reactjs语法<br>
关于命令的简写<br>
介绍三个非常有用的-global,-save, -save-dev(注意区分大小写)<br>
-global简写-g<br>
-save简写-S<br>
-save-dev简写-D<br>
npm init自动化生成创建package.json文件。<br>
