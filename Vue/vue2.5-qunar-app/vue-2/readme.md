# 深入理解Vue组件

1. [组件使用的细节点](index.1.html)
    * is语句的作用：如果直接在tbody里面写`<row>`组件，这样会产生问题，因为tbody里面只能有td>tr标签。所以要使用is语句
    * 子组件定义data必须是函数
    * ref，this.$refs中，它保存了这个button的DOM对象和VM数据。
    * $emit向外触发事件
2. [父子组件的数据传递](index.2.html)
    * 使用v-bind指令、prop向子组件传值，使用data函数接收值并修改
    * 不可以直接修改父组件传递的值
    * 使用$emit向外触发事件，可携带参数以传值
3. [组件参数校验与非props特性](index.3.html)
    * 使用props对象，使用简单的表达式约束content必须是一个字符串 `'content': String`
    * 使用数组来进行多个约束规则 `'content':[String, Number]`
    * 使用对象进行更复杂的规则约束 `'content': {type: String,required: false,default: 'default value'}`
    * 只要子组件用props接收了父组件的content数据，父组件的content属性就不会显示在dom属性中
4. [给组件绑定原生事件](index.4.html)
    * 使用@click.native触发原生点击事件
5. [非父子组件的传值](index.5.html)
    * 如果组件非常多，那么传值就是一个问题
    * 可以使用Bus/总线/发布订阅模式/观察者模式进行传值
    * 也可以使用Vuex进行传值（暂略）
    * 在Vue的原型上加上一个bus属性，使其等于新Vue实例的引用，这个属性会在Vue对象的全局作用域链被访问到。
6. [在Vue中使用插槽](index.6.html)
    * 通过`<slot>`插槽，可以方便的向子组件传递DOM元素
    * 使用具名插槽(slot/name)的方式插入多个DOM元素
    * 在不插入插槽时，可以在slot中使用默认值
7. [Vue中的作用域插槽](index.7.html)
    * 作用域插槽的作用是父组件给子组件传递模板，子组件向父组件传递数据
    * 使用slot-scope，配合子组件的slot标签实现，myProps用来接收v-bind:item数据
    * 作用域插槽必须使用template标签配合slot-scope来接收数据
8. [动态组件与v-once指令](index.8.html)
    * Vue动态组件，使用:is语法绑定相应组件名
    * 在子组件中加上v-once，这样组件现隐时不会频繁销毁重建，而是保存在内存中，提升组件性能