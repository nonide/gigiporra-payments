const express = require('express')

const createError = require('http-errors')
const cors = require('cors')

const app = express();

const config = require('./lib/utils').getConfig()
const indexRouter = require('./routes/index')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404))
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
})

app.listen(config.port)

module.exports = app;
