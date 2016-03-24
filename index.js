const app = require('./src/app')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
})
