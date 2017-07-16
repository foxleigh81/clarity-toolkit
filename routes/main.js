var express = require('express')
var router = express.Router()

var globalComponents = require('../components.js')

router.get('/', (req, res, next) => {
  res.render('index', {
    data: {
      title: 'Page Title'
    },
    vue: {
      head: {
        title: 'Page Title',
        head: [
          { property: 'og:title', content: 'Page Title' },
          { name: 'twitter:title', content: 'Page Title' }
        ]
      },
      components: globalComponents
    }
  })
})

router.get('/about', (req, res, next) => {
  res.render('index', {
    data: {
      title: 'About us'
    },
    vue: {
      head: {
        title: 'About us',
        head: [
          { property: 'og:title', content: 'Page Title' },
          { name: 'twitter:title', content: 'Page Title' }
        ]
      },
      components: globalComponents
    }
  })
})
module.exports = router
