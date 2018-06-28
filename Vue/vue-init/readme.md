# Vue2.0 入门级别教程

这个教程仅仅依赖引入vue.js来实现了解vue的语法的目的，你可以用下面的cdn来引入vue.js

```html
<!-- 开发环境版本，包含了用帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

## [一个简单的 Hello World](v01-hello-world.html)

这里不仅仅包含了一个 helloworld demo，还会含尽量多的实用属性示例。

- new Vue()：新建vue对象的构造函数，传递一个对象作为参数，参数如下
- el：element的简写，表示需要绑定的元素名称
- data：该组件的数据，这些数据是响应式的，使用示例可以直接访问data对象内部的数据，如`obj.hello`
- 双大括号语法`{{ }}`：这对大括号中防止响应式数据的变量名
- 使用`v-bind:`（vue指令）：可以方便的绑定一些标签内的attr，如title`v-bind:title="titleData"`
- 所谓响应式数据（双向绑定），是指更新数据的同时更新DOM内容，你可以使用console来修改数据，看看DOM内容是否更新`obj.hello = Hi World!`

## [一些简单的语句](v02-vue-statements.html)

- v-if：判断语句，当变量为真时，显示该标签内容，否则，标签销毁
- v-for：for-in循环语句，用于循环数组（对象）中的内容循环输出到文档中。

## [事件](v03-vue-event.html)

- methods：和data类似，是vue构造函数传递函数对象作为参数的参数参数
- 使用`v-on:`指令：可以执行一些事件的绑定，如click事件`v-on:click="fnName"`
- `v-model`指令：它能实现表单输入和应用状态之间的双向绑定

## [组件](v04-vue-component.html)

- 使用`Vue.component()`构造函数初始话一个组件，可以包括`template`模板，以及`props`数据，其中props数据需要使用`v-bind`指令进行绑定。
- 真正的数据仍然需要使用`new Vue()`中的`data`来初始化。

---

至此，入门级的教程就结束了，接下来请看进阶文档 https://cn.vuejs.org/v2/guide/instance.html 。