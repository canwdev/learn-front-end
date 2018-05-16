# 安装[live-server](https://www.npmjs.com/package/live-server)

这是一款带有实时重载功能的小型开发服务器。 用它来开发你的HTML / JavaScript / CSS文件，但不能用于部署最终的网站。

有两个原因使用它：

由于安全限制，AJAX请求不适用于 `file://` 协议，即，如果您的站点通过JavaScript获取内容，则需要服务器。
在对文件进行更改后自动重新加载页面可加速开发。
您无需安装任何浏览器插件，也无需手动将代码片段添加到您的页面以便重新加载功能工作。

安装：

`npm install -g live-server`

如果你不想/需要实时重载，你应该使用更简单的东西，比如以下基于Python的单行命令：

`python -m SimpleHTTPServer`

启动服务：仅需简单的一条语句：`live-server`