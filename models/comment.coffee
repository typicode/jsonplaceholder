_        = require 'underscore'
Backbone = require 'backbone'
Faker    = require 'Faker'

class Comment extends Backbone.Model
  initialize: ->
    @set
      id    : 0
      name  : Faker.Lorem.sentence()
      email : Faker.Internet.email()
      body  : Faker.Lorem.sentences(4)

module.exports = Comment