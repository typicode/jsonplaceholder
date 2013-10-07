db         = require './db'
Faker      = require 'Faker'
_          = require 'underscore'
Backbone   = require 'backbone'
Collection = require '../collections/collection'
Post       = require '../models/post'
Comment    = require '../models/comment'
Album      = require '../models/album'
Photo      = require '../models/photo'
User       = require '../models/user'
Todo       = require '../models/todo'

# No syncing
Backbone.sync = ->

run = ->
  db.posts    = new (Collection.extend model: Post)
  db.comments = new (Collection.extend model: Comment)
  db.albums   = new (Collection.extend model: Album)
  db.photos   = new (Collection.extend model: Photo)
  db.users    = new (Collection.extend model: User)
  db.todos    = new (Collection.extend model: Todo)

  # Has many relationships
  # Users
  _(10).times -> 
    user = db.users.create()

    # Posts
    _(10).times -> 
      # userId not set in create so that it appears as the last
      # attribute
      post = db.posts.create().set userId: user.id
      
      # Comments
      _(5).times ->
        db.comments.create().set postId: post.id

    # Albums
    _(10).times ->
      album = db.albums.create().set userId: user.id

      # Photos
      _(50).times ->
        db.photos.create().set albumId: album.id
  
    # Todos
    _(20).times -> db.todos.create().set userId: user.id

exports.run = run