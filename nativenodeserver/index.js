var http = require( 'http' ),
    fs   = require( 'fs' ),
    path = require( 'path' )

var server = http.createServer(function( req, res ) {
  var url, readStream

  url = req.url

  switch ( url ) {
  case '/':
    readStream = fs.createReadStream( path.join(__dirname, 'html/index.html') )
    readStream.pipe( res )
    break
  case '/users':
    res.end( 'users' )
    break
  default:
    res.end( 'not found' )
    break
  }

})

server.listen(3000, function() {
  console.log('server started on port: 3000')
})

