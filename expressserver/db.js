
var db = {
  users: {
    1: {
      id: 1,
      name: 'Christian Laverton',
      username: 'laverton',
      password: 'diamant'
    }
  },
  insertUser: function( user, callback ) {
    setTimeout(function() {
      if( typeof db.users[ user.id ] == 'object' ) {
        callback( new Error('user allready exists') )
      }
      else {
        db.users[ user.id ] = user
        callback( null, user )
      }
    }, 100)
  },
  deleteUser: function( user ) {
    delete this.users[ user.id ]
  },
  fetchUserById: function( id, callback ) {
    setTimeout(function() {
      var user = db.users[ id ]
      if( !user ) {
        callback( new Error('user with id' + id + ' doesnt exits') )
      }
      else {
        callback( null, user )
      }
    }, 2000)
  }
}

module.exports = db