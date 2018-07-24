# 深入理解Vue组件

1. [组件使用的细节点](index.0.html)
    * is语句的作用：如果直接在tbody里面写<row>组件，这样会产生问题，因为tbody里面只能有td>tr标签。所以要使用is语句
    * 子组件定义data必须是函数
    * ref，this.$refs中，它保存了这个button的DOM对象和VM数据。
    * $emit向外触发事件
2. [父子组件的数据传递](index.1.html)