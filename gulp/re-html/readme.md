# Re: HTML Project

## 简介

前端小白的传统HTML组件化探索。

使用原生的HTML+CSS+JS，如果不利用工具，要实现组件复用是几乎不可能的，最多实现CSS+JS的复用，而HTML文档的组件则必须存在多个副本，更改一处要应用到整站必须需要手动的替换，非常麻烦。如果要自动化实现组件的复用，需要使用自动化工具。

由于原生CSS不支持变量、函数等特性，需要使用CSS预编译工具，如Less、Sass。

在这个探索项目中，希望实现这些需求：

- 一个博客类型的纯前端项目，使用模拟的json静态数据
- 仅使用原生的HTML5+CSS3+jQuery+一些开源特效组件
- 组件化HTML：头部、广告条、面包屑导航、列表页、内容页、底部
- CSS网站配色使用全局的变量

## 工具选择

本项目应该基于Node.js的npm工具进行自动化构建

- 动态样式语言：Less
- 打包工具：Gulp

---

## [Less](https://github.com/less/less.js)

- Less是一种动态样式语言，LESS 将 CSS 赋予了动态语言的特性。
- 使用此文档快速入门：http://www.bootcss.com/p/lesscss/
- 在页面上使用less有两种方法：1.编译less为css，2.在页面中使用less.js。

### 方法1：编译Less

- 安装less：`npm i -g less`
- 执行命令：`lessc index.less>index.css`，这样就可以完成编译了，很简单。

### 方法2：引用less.js

一定要在引用less.js之前引用*.less文件，引用的方式如下，注意`rel="stylesheet/less"`：

```html
<link rel="stylesheet/less" href="css/index.less">
<script src="css/lib/less.min.js"></script>
```

---

## [Gulp](https://gulpjs.com/)

- [Gulp](https://www.gulpjs.com.cn/)：用自动化构建工具增强你的工作流程！
- 推荐使用gulp-book快速入门：https://github.com/onface/gulp-book

### Gulp安装

- 安装：`npm install -g gulp`
- 安装完成后可在命令行输入`gulp -v`以确认安装成功。

请务必理解[gulp-book](https://github.com/onface/gulp-book/blob/master/chapter7.md)前面的7个章节再进行操作。

安装这些gulp组件：

```sh
npm install gulp-uglify gulp-watch-path stream-combiner2 gulp-sourcemaps gulp-minify-css gulp-autoprefixer gulp-less gulp-ruby-sass gulp-imagemin gulp-util --save-dev
```

然后就可以在package.json中看到组件的声明，这些`--save-dev`组件会保存在当前的`node_modules`目录下。