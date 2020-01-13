const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan');
const port = parseInt(process.env.PORT, 10) || 8000;

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

require('./server/routes')(app);

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})