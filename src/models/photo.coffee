_        = require 'underscore'
Backbone = require 'backbone'
Faker    = require 'Faker'

class Photo extends Backbone.Model
  _randomHex: ->
    # Credit http://www.paulirish.com/2009/random-hex-color-code-snippets/
    Math.floor(Math.random()*16777215).toString(16);

  initialize: ->
    hex = @_randomHex()
    @set
      id    : 0
      title : Faker.Lorem.sentence()
      url   : "http://placehold.it/600/#{hex}"
      thumbnailUrl : "http://placehold.it/150/#{hex}"

module.exports = Photo