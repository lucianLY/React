##React Flux
经过前面的学习，我们已经掌握了基本的 React、React Router 等方面的知识。<br>
接下来我们要学习的就是 React Flux 部分。<br>
React 本身只涉及 UI 层，如果搭建大型应用，必须搭配一个前端框架。<br>

什么是 Flux ？<br>
Flux 是一种架构思想，一套前端的处理流程。<br>
基本概念有哪些？<br>
```Html
View : 视图层、接收处理的结果
Action : 视图层发出的消息,时间出发或是跟后端通信，发送信息给dispatcher
Dispatcher : 接收Action信息，分派带对应的函数
Store : 数据层，负责处理应用的函数，向dispatcher注册后，再由dispathcer分发
```
