var connect = require( 'connect' )

var app = connect()


app
  .use(function( req, res, next ) {
    if( req.url === '/' ) {
      res.end( 'index ')
    }
    else {
      next()
    }
  })
  .use(function( req, res, next ) {
    res.end( 'something else' )
  })

app.listen( 3000 )