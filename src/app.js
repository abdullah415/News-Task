const express = require('express');

const app = express();

const port = 5000;

const path = require('path');
const hbs =require('hbs');
const news = require('../tools/news');

const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir))

app.set('view engine', 'hbs');

const viewsPath=path.join(__dirname,'../tempates/views');

app.set('views',viewsPath);
const partialsPath=path.join(__dirname,'../tempates/partials');

hbs.registerPartials(partialsPath);


app.get('', (req, res) => {
    news((error,data)=>{
        if(error){
            res.send('connection error')
        }else{
            res.render('index',{
                currentNews: data,
                
            });
        }
    })
});




app.listen(port,() => console.log('listining on server 5000...'));