
###
Module dependencies.
###
express  = require 'express'
cors     = require 'cors'
resource = require './routes/resource'
http     = require 'http'
path     = require 'path'
seed     = require './database/seed'
seed.run()
app      = express()

# all environments
app.set 'port', process.env.PORT or 4000
app.use express.favicon()
app.use express.logger('dev')
app.use express.bodyParser()
app.use express.methodOverride()
app.use express.static(path.join(__dirname, '../public'))
app.use app.router

# development only
app.use express.errorHandler() if 'development' is app.get('env')
                             
app.get    '/:resource', cors(), resource.list                         
app.get    '/:parent/:parentId/:resource', cors(), resource.nestedList
app.get    '/:resource/:id', cors(), resource.show                     
app.post   '/:resource', cors(), resource.create                       
app.put    '/:resource', cors(), resource.update                       
app.delete '/:resource', cors(), resource.destroy                      

http.createServer(app).listen app.get('port'), ->
  console.log 'JSONPlaceholder server listening on port ' + app.get('port')

