_  = require 'underscore'
db = require('../database/db')

exports.list = (req, res) ->
  collection = db[req.params.resource]
  properties = {}
  for key, value of req.query
    properties[key] = if _(+value).isNaN() then value else +value
  if _(properties).isEmpty()
    res.jsonp collection
  else
    res.jsonp collection.where properties

exports.nestedList = (req, res) ->
  properties = {}
  properties["#{req.params.parent.slice(0, - 1)}Id"] = +req.params.parentId
  res.jsonp db[req.params.resource].where properties

exports.show = (req, res) ->
  res.jsonp db[req.params.resource].get req.params.id

exports.create = (req, res) ->
  req.body.id = Math.round(new Date().getTime() / 1000) 
  res.jsonp req.body

exports.update = (req, res) ->
  res.jsonp req.body

exports.destroy = (req, res) ->
  res.status 204