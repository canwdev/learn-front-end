let router = require('./router')
let server = require('./server')

server.start(router.route)
