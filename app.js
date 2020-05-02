const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
// use json parsing
app.use(express.json())
// connect all routes
app.use('/', router)
// turn on server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
