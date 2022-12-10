const express = require('express')    //Requiring express
const articleRouter = require('./routes/articles') //acess to router file
const app = express()

app.set('view engine', 'ejs')    //view engine set to ejs(writing all views using ejs)(viewengine converts ejs to html)


app.use('/articles',articleRouter)  //using the router file we required


app.get('/', (req, res) =>{
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),    //Chnaged from Date.now() to new Date() to get the date
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }]
    res.render('articles/index', { articles: articles})            // render acceses view folder and passes the path to the path we want (index)      //The objects rende out the article
})

app.listen(5000)              //The server