let http = require('http')
let url = require('url')

const PORT = 8092

function start(route) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname
    // console.log('Request for ' + pathname)

    route(pathname, response)
  }

  http.createServer(onRequest).listen(PORT)
  console.log('Server running at http://127.0.0.1:'+PORT)
}

exports.start = start