db = require('../database/db')

exports.list = (req, res) ->
  page = req.query.page
  collection = db[req.params.resource]
  if page
    begin = (page - 1) * 5
    end = begin + 5
    res.jsonp collection.slice begin, end
  else
    res.jsonp collection

exports.nestedList = (req, res) ->
  properties = {}
  properties["#{req.params.parent}_id"] = req.params.parend_id
  db[req.params.resource].where properties

exports.show = (req, res) ->
  res.jsonp db[req.params.resource].get req.params.id

exports.create = (req, res) ->
  req.body.id = Math.round(new Date().getTime() / 1000) 
  res.jsonp req.body

exports.update = (req, res) ->
  res.jsonp req.body

exports.destroy = (req, res) ->
  res.status 200