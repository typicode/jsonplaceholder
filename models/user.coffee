_ = require 'underscore'
Backbone = require 'backbone'
Faker = require 'Faker'

class User extends Backbone.Model
  initialize: ->
    card = Faker.Helpers.userCard();
    @set id: 0
    @set card

module.exports = User