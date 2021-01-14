const request = require('request');


const news=(callback)=>{
    const url='http://newsapi.org/v2/top-headlines?country=eg&apiKey=3b3b13aed19f4575b467e8f8719976dd';

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('connection error',undefined)
        }else if(response.body.articles.length===0){
            callback('unable to find country',undefined)
        }else{
            callback(undefined,response.body.articles)
        }
    })

}

module.exports= news;