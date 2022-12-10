const express = require('express')
const Article = require('./../models/article')
const router = express.Router()      //gives us a router where we can create views

router.get('/new', (req, res) =>{              // '/' is the index route so thats how we get articles
res.render('articles/new')
})


router.post('/', async (req, res)=>{                  //whenever we submit the form it will call this router.post which is at the / route
const article = new Article ({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
    
})
await article.save()
})
module.exports = router