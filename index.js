const app = require('./src/app')
const port = process.env.PORT || 3008

app.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
})
