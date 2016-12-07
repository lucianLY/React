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
```Javascript
/*coffee-circle.jsx*/
import React from 'react'

class CoffeeCircle extends React.Component {
  render () {
    return (<h1>咖圈子</h1>)
  }
}

export default CoffeeCircle
/*coffee-college.jsx*/
import React from 'react'

class CoffeeCollege extends React.Component {
  render () {
    return (<h1>咖学院的内容</h1>)
  }
}
export default CoffeeCollege
```
我们还需要修改一下index.jsx里的Route部分。
```Javascript
render((
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/college' component={College} />
    <Route path='/circle' component={Circle} />
  </Router>
  ), document.getElementById('app')
)
```
这样当我们访问[http://localhost:8080/#/college](http://localhost:8080/#/college)和[http://localhost:8080/#/circle](http://localhost:8080/#/circle)会可以看到相应的提示内容了。<br/>
这时我们发现顶部的导航不在每个分页之中，把导航嵌入在组件里需要两步首先使组块成为子类，然后并在父类中引用。修改我们的index.jsx文件
```Javascript
let routes = <Router path='/' component={Header}>
  <Route path='/college' component={College} />
  <Route path='/circle' component={Circle} />
</Router>

render((
  <Router routes={routes} history={hashHistory}>
  </Router>
  ), document.getElementById('app')
)
```
修改header.jsx文件
```Javascript
return (
  <div>
    <div className='header'>
      <ul>{HeaderItem}</ul>
    </div>
    {this.props.children}
  </div>
)
```
看一下比较熟悉的URL形式
```Javascript
/college/tea/kinds
/college/coffee/history
```
这种路由形式其实看起来更像是
```javascript
/college/:plate/:article
```
按照这一的形式，我们开始修改路由规则
```Javascript
import Article from './components/article.jsx'

let routes = <Router path='/' component={Header}>
  <Route path='/college' component={College} />
  <Route path='/college/:Article' component={Article} />
  <Route path='/circle' component={Circle} />
</Router>
```
coffee-college文件也调整一下。
```javascript
render () {
  const Host = 'http://localhost:8080/#/'
  return (
    <div>
      <a href={Host + 'college/The history of coffee'}>咖啡的历史</a>
    </div>
  )
}
```
新建一个子页面，点击文章链接，可以跳转显示 article.jsx
```javascript
import React from 'react'

class Article extends React.Component {
  render () {
    return (
      <div>
        <span >{this.props.params.Article}</span>
      </div>
    )
  }
}
export default Article
```
让我们测试一下吧~<br>
完成上面的案例我们注意到，当我们访问项目中'/'路径是，不会指向任何组件也就是说这时候的{this.props.children}是undefined。我们希望他可以渲染Home组件里的内容。<br>
首先我们先新建home.jsx组件在components文件夹下。
```Javascript
import React from 'react'
class Home extends React.Component {
  render () {
    const recommends = [
      {
        id : 1,
        title : '咖啡豆种类',
        href : './knowledge/1',
        image : './images/coffee-bean.jpg'
      }
    ]
    let Lists = recommends.map((number, index) =>
      <div className='recommend_bg' style={{backgroundImage: 'url(' + number.image + ')'}}  key={index} >
        <a href='./knowledge.html' className='title_recommend'>{number.title}</a>
      </div>
    )
    return (
      <div className = 'recommends'>
        <div className='index_recommend'>
          {Lists}
        </div>
      </div>
    )
  }
}
export default Home
```

接下来在修改header.jsx如果有子类就进app没有就返回home页面。
```Javascript
import Home from './home.jsx'
return (
  <div>
    <div className='header'>
      <ul>{HeaderItem}</ul>
    </div>
    { this.props.children || <Home /> }
  </div>
)
```
这样做的原因是：<br/>
1、有利于使用React Router提供的各种API<br>
2、参与了onEnter钩子<br/>
3、有利于代码分离<br/>
注意：我们是构建小程序中的小程序而非大程序。<br/>
然后修改index.jsx文件路由
```Javascript
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from './components/home.jsx'

<Router routes={routes} history={hashHistory}>
  <IndexRoute component={Home}/>
</Router>
```
注意 IndexRoute是没有路径path参数，因为IndexRoute变成了this.props.children，当没有子类匹配到父类时它就变成了父类节点this.props.children<br/>
