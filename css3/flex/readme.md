# CSS3 flex 布局

## 参考

[Flex 布局语法教程](http://www.runoob.com/w3cnote/flex-grammar.html)
[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

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

## 兼容性

flex布局兼容以下版本的浏览器：

- Chrome 21+
- Firefox 22+
- Safari 6.1+
- IE 10+

由于国内IE版本普遍偏低，所以目前flex布局适用于不需要兼容IE的主流浏览器，主要应用在移动设备上。

## [Demo](index.html)

- [点击查看HTML](index.html)
- [点击查看CSS](index.css)

![flex](flex.png)

    采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。

    容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

    项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## **flex容器属性**(.m-container)

### flex-direction属性

flex-direction属性决定主轴的方向。

```css
.m-container {
    flex-direction: row | row-reverse | column | column-reverse;
}
```

### flex-wrap属性

flex-wrap属性定义如何换行。

```css
.m-container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

### flex-flow

flex-flow属性是上述两个属性的简写形式。

```css
.m-container {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

---

### justify-content属性

justify-content属性定义了项目在主轴上的对齐方式。

```css
.m-container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

### align-items属性

align-items属性定义项目在交叉轴上如何对齐。

```css
.m-container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

### align-content属性

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.m-container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

---
---

## **flex项目属性**(.m-item)

### order属性

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.m-item {
    order: 1;
}

.m-item-first {
    order: 0;
}
```

### flex-grow属性

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

```css
.m-item {
    flex-grow: 1;
}
.m-item-grow-2 {
    flex-grow: 2;
}
```

### flex-shrink属性

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

```css
.m-item {
    flex-shrink: 1;
}
.m-item-shrink {
    flex-shrink: 0;
    width: 150px;
}
```

### flex-basis属性

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
它可以设为跟width或height属性一样的值（比如20px），则项目将占据固定空间。

```css
.m-item-basis {
    flex-basis: 20px;
}
```

### flex属性

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```css
.m-item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

### align-self属性

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```css
.m-item-bottom {
    align-self: flex-end;
}
```
