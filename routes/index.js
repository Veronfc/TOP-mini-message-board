const express = require('express')
const router = express.Router()

const _filter = require('bad-words')
const filter = new _filter()

const FORMAT = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

const posts = [
  {
    message: 'Hello World! this is gonna be a long ass message to test out how the overflow looks so lets just make this super super long and we need to go even longer with this shit so here goes, some more useless text',
    author: 'Veronfc',
    added: FORMAT.format(new Date())
  },
  {
    message: 'Hello World! this is gonna be a long ass message to test out how the overflow looks so lets just make this super super long and we need to go even longer with this shit so here goes, some more useless text',
    author: 'Veronfc',
    added: FORMAT.format(new Date())
  },
  {
    message: 'Hello World! this is gonna be a long ass message to test out how the overflow looks so lets just make this super super long and we need to go even longer with this shit so here goes, some more useless text',
    author: 'Veronfc',
    added: FORMAT.format(new Date())
  },
  {
    message: 'Hello World! this is gonna be a long ass message to test out how the overflow looks so lets just make this super super long and we need to go even longer with this shit so here goes, some more useless text',
    author: 'Veronfc',
    added: FORMAT.format(new Date())
  },
]

router.get('/', function(req, res, next) {
  res.render('index', { posts: posts })
});

router.get('/new', function(req, res, next) {
  res.render('form')
});

router.post('/new', function(req, res, next) {
  posts.push({
    message: filter.clean(req.body.message),
    author: filter.clean(req.body.author),
    added: FORMAT.format(new Date())
  })

  res.redirect('/')
})

module.exports = router;
