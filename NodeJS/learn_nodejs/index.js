let fs = require('fs')
const express = require('express')
const app = express()

// let database = require('./database_relative')
// database.database()

// 利用 Express 托管静态文件
app.use('/static', express.static('./public/static'))

app.get('/', function (req, res, next) {
  var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile('index.html', options, function (err) {
    if (err) {
      next(err);
    }
  });
});

// mock数据
app.get('/api/main', (req, res) => {
  var data = fs.readFileSync('./public/static/main.json')
  res.set('Content-Type', 'text/plain; charset=utf8');
  res.send(data)
})

const PORT = 8092

app.listen(PORT, () => {
  console.log('Server running at http://127.0.0.1:'+PORT)
})