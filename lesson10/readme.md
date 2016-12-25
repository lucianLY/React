##React 表单
HTML 的表单元素与 React 表单元素略有不同，因为 HTML 表单元素是保持了原有的内部属性。
```HTML
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```
受控的表单 <br>
1、首先我们需要构建一个基本的from 表单 <br>
2、初始化 input 内的数据 <br>
3、设置监听的方法，并进行更新 <br>
