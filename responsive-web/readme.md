# 响应式网页实战

## 什么是响应式

通过媒体查询等相关技术，实现一个网页在不同分辨率屏幕下显示出最佳效果。需要按照多套设计图实现多个css样式。

## 媒体查询

```css
@media only screen and (max-width: 800px) {
/* 最大屏幕限制：800px，小于该分辨率的使用此样式 */
}
@media only screen and (min-width: 481px) and (max-width: 800px) {
/* 屏幕宽度在：481~800px之间 */
}
@media only screen and (max-width: 480px) {
/* 最大屏幕限制：480px，小于该分辨率的使用此样式 */
}
```

## 推荐网站

- [TinyPNG](https://tinypng.com/)
- [Autoprefixer CSS](http://autoprefixer.github.io/)
- [Can I use...](https://caniuse.com/#)
- [Icon Font & SVG Icon Sets ❍ IcoMoon](https://icomoon.io/)
- [Browserhacks](http://browserhacks.com/)
- [gulp.js - 基于流的自动化构建工具。 | gulp.js 中文网](https://www.gulpjs.com.cn/)
- [Home | Owl Carousel | 2.3.4](https://owlcarousel2.github.io/OwlCarousel2/)
- [html5shiv](https://github.com/aFarkas/html5shiv)
- [REM-unit-polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill)
- [Modernizr: the feature detection library for HTML5/CSS3](https://modernizr.com/)

## [gulp](https://www.gulpjs.com.cn/) ——用自动化构建工具增强你的工作流程！

### gulp安装

```sh
# 安装gulp
npm i --save-dev gulp
# 查看版本
gulp -v
```

### gulp常用[插件](https://gulpjs.com/plugins/)介绍

- [gulp-rev](https://www.npmjs.com/package/@hvent/gulp-rev)：以hash命名css、js文件，防止客户端浏览器缓存
- [gulp-rev-replace](https://www.npmjs.com/package/gulp-rev-replace)：自动重写由gulp-rev重命名的文件内部文件名的引用
- [gulp-useref](https://www.npmjs.com/package/gulp-useref)：分析html的自定义注释标签，它可以处理文件连接，但不能缩小。文件然后传递到流中。
- gulp-filter：在流中过滤出相应css、js文件，处理，然后通通过restore返回流。
- gulp-uglify：js压缩
- gulp-csso：css压缩

```sh
# 安装常用插件
npm install gulp-rev gulp-rev-replace gulp-useref gulp-filter gulp-uglify gulp-csso
```

### 编写gulpfile.js

```js
// 引入依赖
var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

// 名为hello的task，可以通过gulp hello命令执行
gulp.task('hello', function () {
    console.log('Hello gulp!');
});

// 默认task，直接通过gulp执行
gulp.task('default', function () {
    // 过滤出js、css文件
    var jsFilter = filter('**/*.js', {restore: true});
    var cssFilter = filter('**/*.css', {restore: true});
    // 过滤出html文件（带感叹号的表示不要过滤index.html）
    var indexHtmlFilter = filter(['**/*', '!**/index.html'], {restore: true});

    return gulp.src('src/index.html')   // 源文件
        .pipe(useref())
        .pipe(jsFilter) // 过滤出js
        .pipe(uglify()) // 压缩js
        .pipe(jsFilter.restore) // 返回流
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));   // 输出文件夹
})
```

将gulpfile.js放在项目目录中，执行：`gulp`即可

### gulp 其他插件

- [gulp-watch](https://www.npmjs.com/package/gulp-watch)
- [gulp-postcss](https://www.npmjs.com/package/gulp-postcss)
    - [autoprefixer]
    - [cssnano]
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [gulp-responsive](https://www.npmjs.com/package/gulp-responsive)

## 响应式框架

- [Bootstrap](http://www.bootcss.com/)
- [Foundation](https://foundation.zurb.com/)
- [Semantic UI](http://www.semantic-ui.cn/)
- [Pure.CSS](https://www.purecss.cn/)

## 设计图工具

- Axure RP
- Mockup
- Sketch - UI设计
- Flinto - 交互原型设计