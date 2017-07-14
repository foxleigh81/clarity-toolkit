var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  var scope = {
    data: {
      title: 'Clarity Toolkit'
    },
    vue: {
      head: {
        title: 'Clarity Toolkit',
        meta: [
          { property: 'og:title', content: 'Clarity Toolkit' },
          { name: 'twitter:title', content: 'Clarity Toolkit' }
        ],
        structuredData: {
          '@context': 'http://schema.org',
          '@type': 'Organization',
          'url': 'http://www.your-company-site.com',
          'contactPoint': [{
            '@type': 'ContactPoint',
            'telephone': '+1-401-555-1212',
            'contactType': 'customer service'
          }]
        }
      },
      components: ['global-header', 'global-footer']
    }
  }
  res.render('index', scope)
})
