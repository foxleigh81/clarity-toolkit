var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var stylus = require('stylus')
var expressVue = require('express-vue')

var main = require('./routes/main')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))

app.set('vue', {
    // ComponentsDir is optional if you are storing your components in a different directory than your views
  componentsDir: path.join(__dirname, '/components'),
  defaultLayout: 'layout'
})

app.engine('vue', expressVue)
app.set('view engine', 'vue')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(stylus.middleware(path.join(__dirname, 'assets')))
app.use('/static', express.static(path.join(__dirname, 'assets')))

app.use('/', main)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error', {
    data: {
      error: err.status
    },
    vue: {
      head: {
        title: 'Error: ' + err.status,
        head: [
          { property: 'og:title', content: 'Page Title' },
          { name: 'twitter:title', content: 'Page Title' }
        ]
      }
    }
  })
})

module.exports = app

var port = process.env.PORT || 5000        // set our port

// START THE SERVER
app.listen(port)
