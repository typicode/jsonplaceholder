Backbone = require 'backbone'

class Collection extends Backbone.Collection
  autoIncrement: (model) ->
    model.set 'id', @length

  initialize: ->
    @on 'add', @autoIncrement, @

module.exports = Collection