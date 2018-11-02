let fs = require('fs')

function index(res) {
  console.log('!!! INDEX !!!')

  res.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
  fs.readFile('./public/index.html', 'utf-8', function (err, data) {
    if (err) {
      throw err;
    }
    res.end(data);
  });

}

function apiMain(res) {
  console.log('!!! apiMain !!!')

  res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"});
  // 同步读取文件
  var data = fs.readFileSync('./public/static/main.json')
  res.end(data.toString());
}

exports.home = index
exports.apiMain = apiMain