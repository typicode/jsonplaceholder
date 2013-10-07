_        = require 'underscore'
Backbone = require 'backbone'
Faker    = require 'Faker'

class Todo extends Backbone.Model
  initialize: ->
    @set
      id: 0
      title: Faker.Lorem.sentence()
      completed: if _.random(1) then true else false

module.exports = Todo