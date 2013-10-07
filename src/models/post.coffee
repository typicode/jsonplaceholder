_        = require 'underscore'
Backbone = require 'backbone'
Faker    = require 'Faker'

class Post extends Backbone.Model
	initialize: ->
		@set
      id      : 0
      title   : Faker.Lorem.sentence()
      body    : Faker.Lorem.sentences(4)
    

module.exports = Post