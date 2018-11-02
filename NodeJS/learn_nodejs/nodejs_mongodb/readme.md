# NodeJS + MongoDB

MongoDB是一种NoSQL类型的数据库，按照我理解的话来说，是一种可以直接存储JavaScript对象的数据库！MongoDB数据库操作语言正是JavaScript，对前端开发者非常友好。

参考菜鸟教程来学习：http://www.runoob.com/nodejs/nodejs-mongodb.html

## 一些数据库命令：

```mongodb
show dbs
show tables
db.site.find()
db.site.find().pretty()
```

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

1. [MongoDB 基础操作，新建/删除数据库、集合、增删改查](./database.js)
2. [MongoDB 实现左连接（类似关系数据库）](./database_relative.js)

