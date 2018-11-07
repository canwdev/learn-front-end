var express = require('express');
var router = express.Router();

common_data = {
  title: '我的Express！'
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', common_data);
});

router.get('/about', function (req, res, next) {
  res.render('about', common_data);
});

router.get('/userlist', function (req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function (err, docs) {
    if (err) throw err;

    // 仅输出用户名
    console.log(docs)
    var name = []
    for (var i in docs) {
      name.push(docs[i].username+', '+docs[i].email)
    }

    res.render('user_list', {
      'title': '本月加急名单',
      'userlist': name
    });


    console.log('数据库连接成功！')
  })
});

router.post('/adduser', function (req, res) {
  
  // 接收post数据
  console.log(req.body)
  var username = req.body.username;
  var email = req.body.email;
  
  // 连接数据库
  var db = req.db;
  var collection = db.get('usercollection');

  // 提交到数据库
  collection.insert({
    'username': username,
    'email': email
  }, function (err, doc) {
    if (err) {
      res.send("There was a problem adding the information to the database.");
      throw err
    }

    res.location('userlist')
    res.redirect('userlist')
  })
});

router.get('/adduser', function (req, res, next) {
  res.render('user_add', {'title': '添加新用户'});
});

router.get('/api', function (req, res) {
  res.json({message: 'This is our api'})
});

module.exports = router;