let mongoClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017/warthunder_web'

function database() {
  mongoClient.connect(url, (err, db) => {
    if (err) throw err
    console.log('数据库已连接！')

    // 创建集合操作
    // 注：如果不存在数据库将自动窗创建 
    /*
    let dbase = db.db('warthunder_web')
    dbase.createCollection('site', (err, res) => {
      if (err) throw err
      console.log('创建集合！')

      db.close()
      console.log('数据库已关闭！')
    })
    */

    // 向集合插入一条数据
    /*
    let dbo = db.db('warthunder_web')
    let my_obj = {
      name: '菜鸟教程',
      url: 'www.runoob.com',
      other: '其他字段！'
    }
    dbo.collection('site').insertOne(my_obj, (err, res) => {
      if (err) throw err
      console.log('数据插入成功！')
      db.close()
    })
    */

    // 向集合插入多条数据
    /*
    let dbo = db.db('warthunder_web')
    let my_obj = [
      { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
      { name: 'Google', url: 'https://www.google.com', type: 'en'},
      { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
     ]
    dbo.collection('site').insertMany(my_obj, (err, res) => {
      if (err) throw err
      console.log('插入的文档数量为：'+res.insertedCount)
      db.close()
    })
    */

    // 查询数据
    /*
    let dbo = db.db('warthunder_web')
    dbo.collection('site').find({}).toArray((err, res) => {
      if (err) throw err
      console.log('查询数据：', res)
      db.close()
    })
    */

    // 查询指定条件的数据
    /*
    let dbo = db.db('warthunder_web')
    let whereStr = {'name': '菜鸟教程'};
    dbo.collection('site').find(whereStr).toArray((err, res) => {
      if (err) throw err
      console.log('查询数据：', res)
      db.close()
    })
    */

    // 更新一条数据
    /*
    let dbo = db.db('warthunder_web')
    let whereStr = {'name':'菜鸟教程'}
    let updateStr = {$set: {'url': '666666'}}
    dbo.collection('site').updateOne(whereStr, updateStr, (err, res) => {
      if (err) throw err
      console.log('文档更新成功！')
      db.close()
    })
    */

    // 更新多条数据
    /*
    let dbo = db.db('warthunder_web')
    let whereStr = {'name':'菜鸟教程'}
    let updateStr = {$set: {'url': '666666'}}
    dbo.collection('site').updateMany(whereStr, updateStr, (err, res) => {
      if (err) throw err
      console.log(res.result.nModified + '条文档被更新！')
      db.close()
    })
    */

    // 删除一条数据
    /*
    let dbo = db.db('warthunder_web')
    let whereStr = {'name':'Facebook'}
    dbo.collection('site').deleteOne(whereStr, (err, res) => {
      if (err) throw err
      console.log('文档删除成功！')
      db.close()
    })
    */

    // 删除多条数据
    /*
    let dbo = db.db('warthunder_web')
    let whereStr = {'name':'Facebook'}
    dbo.collection('site').deleteMany(whereStr, (err, res) => {
      if (err) throw err
      console.log(res.result.n+'条文档被删除！')
      db.close()
    })
    */

    // 排序
    // { type: 1 }  // 按 type 字段升序
    // { type: -1 } // 按 type 字段降序
    /*
    let dbo = db.db('warthunder_web')
    let my_sort = { type: 1 }
    dbo.collection('site').find().sort(my_sort).toArray((err, res) => {
      if (err) throw err
      console.log(res)
      db.close()
    })
    */

    // 查询分页
    // skip(): 跳过前面两条数据，读取两条数据
    /*
    let dbo = db.db('warthunder_web')
    dbo.collection('site').find().skip(2).limit(2).toArray((err, res) => {
      if (err) throw err
      console.log(res)
      db.close()
    })
    */

    // 删除集合
    /*
    var dbo = db.db('warthunder_web')
    dbo.collection('site').drop((err, delOK) => {
      if (err) throw err
      if (delOK) {
        console.log('集合已删除！')
      }
      db.close()
    })
    */

  })
}

// 汇出
exports.database = database

// 如何在外部文件引入此文件，以及调用方法：
/*
let database = require('./database')
database.database()
*/