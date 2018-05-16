# [搭建ES6环境](index.html)

为了兼容仅支持ES65的老式浏览器，我们需要搭建ES6环境。

首先你需要安装[`npm`](https://www.npmjs.com/)命令行工具，安装了[`Node.js`](https://nodejs.org)工具会附带一个npm。

（可选）安装[`cnpm`](http://npm.taobao.org/)，淘宝提供的一个npm镜像，加快国内npm应用下载速度。
在终端下执行：

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

初始化环境：在你当前项目目录下执行下面命令，初始化环境，并生成一个`package.json`文件。

```sh
npm init -y
```

安装[`babel`](http://babeljs.io/)，babel是一个JavaScript编译器，可以把ES6代码转换成ES5。

```sh
npm install -g babel-cli
```

安装 CLI 和 env preset （用于安装ES5转换库）

```sh
npm install --save-dev babel-cli babel-preset-env
```

创建一个`.babelrc`文件（或用你的`package.json`）

```sh
{
  "presets": ["env"]
}
```

可以转换了！输入以下命令：

```sh
babel src/index.js -o dist/index.js
```

如果你想快速build的话，可以修改`package.json`里面的参数，找到`scripts`改成：

```js
"scripts": {
    "build": "babel src/index.js -o dist/index.js"
}
```

这样你就可以只执行`npm run build`命令代替上面的转换命令了。

## 变量声明

用`var`声明的变量，不支持块级作用域（在块级作用域仍被视为全局变量）。

用`let`声明的变量支持块级作用域。

用`const`声明的变量是常量，其值不能修改。