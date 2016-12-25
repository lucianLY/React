##React Flux
经过前面的学习，我们已经掌握了基本的 React、React Router 等方面的知识。<br>
接下来我们要学习的就是 React Flux 部分。<br>
React 本身只涉及 UI 层，如果搭建大型应用，必须搭配一个前端框架。<br>

Flux 概述<br>
Flux 是一种架构思想，用来管理前端的数据流。非常重要的概念是单向数据流，当我们阅读完本篇之后你会可以谈及Flux 应用的不同部分<br>
基本概念有哪些？<br>
```Html
View : 视图层、接收处理的结果
Action : 视图层发出的消息,时间出发或是跟后端通信，发送信息给dispatcher
Dispatcher : 接收Action信息，分派带对应的函数
Store : 数据层，负责处理应用的函数，向dispatcher注册后，再由dispathcer分发
```
Dispatcher
dispatcher 接收来自actions和dispatches并发布到被dispatcher注册的store，每一个store都会接收到每一个动作。
Store
store用来存储应用数据，商店被应用的dispatcher注册以便他们可以接收动作。store里数据的变化是通过action触发。这就需要没有公共的更改只能获取。store决定了action他们想要的响应，每一次商店数据发生改变，都需要使用"change"事件。
Actions
Actions 定义了项目内部的API，他们从你项目中的交互进行捕捉，
Views
从store来的数据被渲染在试图，当试图引用了store的数据就必须要绑定store里的事件。当store发出change指令，试图可以获取到新的数据并进行渲染。

如何开始做 flux-TodoMVC 步骤划分
1、我们新建一个 dispatcher.js 文件，在里面我们引入 Dispatcher。并且实例化一个新的 dispatcher。
```javascript
import {Dispatcher} from 'flux'
export default new Dispatcher
```
2、新建一个 action 以及 action 的类型。 设置这些文件让他们始终都在项目中。</br>
3、新建 TodoActions.js，每一个dispatcher的方法都在这里。</br>
4、开始新建我们的仓库，新建 APPStore.js 文件，他将用来存储 List 数据在我们的APP里。</br>
5、更新 view.js 文件。</br>
6、容器是连接从仓库到视图。</br>
7、最终将其更新到更目录的 react 文件。</br>
