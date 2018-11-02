let mongoClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017/warthunder_web'

function database() {
  mongoClient.connect(url, (err, db) => {
    if (err) throw err

    // === $lookup 实现左连接（类似关系数据库） ===

    let dbo = db.db('warthunder_web')

    // 1.创建集合orders
    /*
    dbo.createCollection('orders', (err, res) => {
      if (err) throw err
    })
    
    let obj_orders = [{ _id: 1, product_id: 154, status: 1 }]
    dbo.collection('orders').insertMany(obj_orders, (err, res) => {
      if (err) throw err
      console.log('插入的文档数量为：'+res.insertedCount)
    })
    */

    // 2.创建集合products
    /*
    dbo.createCollection('products', (err, res) => {
      if (err) throw err
    })
    let obj_products = [
      { _id: 154, name: '笔记本电脑' },
      { _id: 155, name: '耳机' },
      { _id: 156, name: '台式电脑' }
    ]
    dbo.collection('products').insertMany(obj_products, (err, res) => {
      if (err) throw err
      console.log('插入的文档数量为：'+res.insertedCount)
    })
    */

    // 3. $lookup 实现左连接
    dbo.collection('orders').aggregate([
       { $lookup: 
          {
            from: 'products',           // 右集合
            localField: 'product_id',   // 左集合 join 字段
            foreignField: '_id',        // 右集合 join 字段
            as: 'orderdetails'          // 新生的成字段名称（类型array）
          }
       }
    ]).toArray((err, res) => {
      if (err) throw err
      console.log(JSON.stringify(res))
      db.close()
    })

  })
}

// 汇出
exports.database = database

// 如何在外部文件引入此文件，以及调用方法：
/*
let database = require('./database_relative')
database.database()
*/