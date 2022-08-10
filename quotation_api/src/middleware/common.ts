import express from 'express';
import { maxHeaderSize } from 'http';
import { sensitiveHeaders } from 'http2';
import { nextTick } from 'process';
const cors = require('cors');
const request = require('request')
const errorHandle = require('./error_handle');
const app = express();




app.use(cors()) 
app.use(express.json())

// app.use('/',(req,res,next) => {
//    //  console.log(req.originalUrl)
//    if(req.originalUrl == 'Login'){
//        res.json('Not Auth');    
//    }
//    next();
//    })
   
let valid:any={};
// app.use('/',(req,res,next) => {
//    if(req.originalUrl === "/user/login")
//    {
//       next()
//    }else{
      
//       console.log(req.get("Authorization"))
//       console.log(req.headers)
//    request.post({
//       url:' http://localhost:5500/token/valid',
      
//      // headers:req.headers.authorization?.split(' '),
//       headers:req.headers,
//      // headers: res.header('Authorization',req.headers.authorization?.split(' ')),

//       //   setHeader: function(req:any, res:any)
//       // {
//       //    res.set('Authorization', authtoken?.split(' '))

//       // },
//       json: true
//   }, function(err:any, response:any, body:any){
//    if(response.statusCode == 200)
//    {
//       next()
      
//    }else{
//       valid =body
//       console.log(response)
//       res.json(valid)

//    }
        
//   })

//    }
 
  
// })


module.exports = app;




