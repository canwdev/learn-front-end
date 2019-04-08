# [ECMAScript 6 入门](http://es6.ruanyifeng.com/) 笔记

## 安装 Babel 

babel 可以将ES6代码转换成ES5代码以兼容旧浏览器

安装命令：

```sh
npm install --save-dev babel-cli
npm install --save dev babel-preset-env
```

package.json 配置文件示例

```json
{
  "name": "mobiledev",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  },
  "scripts": {
    "build": "babel src -d dist"
  },
  "author": "",
  "license": "ISC"
}
``` 

## 目录 Contents

1. [let 和 const 命令](http://es6.ruanyifeng.com/#docs/let)
1. [变量的解构赋值](destructuring/readme.md)
1. [字符串的扩展](string/readme.md)
1. [正则的扩展](regex/readme.md)
1. [数值的扩展](http://es6.ruanyifeng.com/#docs/number)
1. [函数的扩展](function/readme.md)
1. [数组的扩展](array/readme.md)