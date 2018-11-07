# Express学习笔记

https://nodejust.com/nodejs-routing-request/zh-cn/

## 创建express项目：
  
  npm install --global express
  express testproject --hogan -c stylus

## MongoDB基础语句

```mongodb
// 选择数据库(如果没有则新增数据库)
use testproject
// 向usercollection集合插入一条数据
db.usercollection.insert({"username":"zack", "email":"zacl@zacklive.com"})
// 读取集合中的资料，pretty()美化输出
db.usercollection.find().pretty()
// 也可以使用变量
newusers = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
db.usercollection.insert(newusers);
```