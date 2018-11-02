let showPage = require('./showPage')

function route(pathname, res) {
  if (pathname == '/favicon.ico') return
  var handle = {}
  handle['/'] = showPage.home
  handle['/api/main'] = showPage.apiMain

  if (typeof handle[pathname] === 'function') {
    handle[pathname](res)
  } else {
    console.log('!!! 404 Not Found !!! '+ pathname)
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"})
    res.end("404 Not Found " + pathname)
  }
}

exports.route = route