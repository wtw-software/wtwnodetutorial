
/**
 * Module dependencies.
 */

var express   = require( 'express' )
    routes    = require( './routes') ,
    user      = require( './routes/user') ,
    http      = require( 'http') ,
    path      = require( 'path') ,
    db        = require( './db' )



var app = express()


app.configure(function(){
  app.set( 'port', process.env.PORT || 3000 )
  app.set( 'views', __dirname + '/views' )
  app.set( 'view engine', 'hjs' )
  app.use( express.favicon() )
  app.use( express.logger('dev') )
  app.use( express.bodyParser() )
  app.use( express.methodOverride() )
  app.use( express.cookieParser('your secret here') )
  app.use( express.session() )
  app.use( app.router )
  app.use( require('less-middleware')({ src: __dirname + '/public' }) )
  app.use( express.static(path.join(__dirname, 'public')) )
});

app.configure('development', function() {
  app.use( express.errorHandler() )
})




function fetchUser( req, res, next ) {
  db.fetchUserById( req.params.id, function( err, user ) {

    if( err ) {
      next( err )
      return
    }

    req.queriedUser = user
    next()
  })
}

app.get('/user', function( req, res, next ) {
  // return all users
});

app.post('/user', function( req, res, next ) {
  // create a user
});

app.get('/user/:id', fetchUser, function( req, res, next ) {
  res.send( req.queriedUser )
})

app.del('/user/:id', fetchUser, function( req, res, next ) {
  db.deleteUser( req.queriedUser )
  res.end()
})




http.createServer( app ).listen(app.get( 'port' ), function() {
  console.log( "Express server listening on port " + app.get('port') )
})
