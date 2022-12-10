const express = require('express')
const router = express.Router()      //gives us a router where we can create views

router.get('/new', (req, res) =>{              // '/' is the index route so thats how we get articles
res.render('articles/new')
})


router.post('/', (req, res)=>{                  //whenever we submit the form it will call this router.post which is at the / route

})
module.exports = router