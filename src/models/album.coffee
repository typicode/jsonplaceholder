_        = require 'underscore'
Backbone = require 'backbone'
Faker    = require 'Faker'

class Photo extends Backbone.Model
  initialize: ->
    @set
      id    : 0
      title : Faker.Lorem.sentence()
      

module.exports = Photo