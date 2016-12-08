##React 嵌套组件
之前的代码里 `Layout` 这个类构件了一个一行代码，如果我们按照页面布局的形式来划分应该在其上部有一个 `<header>` 在下部有一个 `<footer>` 标签。然后统一加载到页面上。<br>
首先让我们新建一个 `components` 文件夹，里边放进去 `header.jsx` 和 `footer.jsx` 两个文件，<br>
`header.jsx` 的内容
```Javascript
import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
      <h1> Welcome ! </h1>
    )
  }
}

```
`footer.jsx` 的内容
```Javascript
import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <h1> Fooer </h1>
    )
  }
}
```
更新一下 `index.jsx` 文件
```Javascript
····
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

class Layout extends React.Component {
  constructor (name) {
    super()
    this.name = 'Lucian'
  }
  render () {
    return (
      <div>
        <Header />
        <h1>Hello {this.name} </h1>
        <Footer />
      </div>
    )
  }
}
····
```
export default 命令<br>
从前面的例子可以看出，使用 `import` 命令的时候，用户需要知道所加载的变量名或者函数名，否则无法加载。为了用户可以直接加载到模块就需要 `export default` 命令了。 `export default` 也可以直接用在匿名函数前面。<br>
当然为了项目更加整洁点，我们也可以拆分出去 `Layout` 类。新建 `layout.jsx` 文件在 component 文件夹下。
