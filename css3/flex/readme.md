# CSS3 flex 布局

## 参考

[Flex 布局语法教程](http://www.runoob.com/w3cnote/flex-grammar.html)
[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 所以说什么是flex布局

传统的布局是基于盒子模型，依赖display、float、position这些属性来进行布局，对于例如**垂直居中**这类的特殊布局不容易实现。

flex布局，Flexible Box，也叫**弹性布局**，是w3c在2009年提出的新方案，可以简便的实现各种布局。

任何一个容器都可以使用flex布局。注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。

```css
p.box {
    display: flex;
}

span.item {
    display: inline-flex;
}

```