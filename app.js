const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors =require('cors')
const dotenv = require('dotenv');
const multer  = require('multer')
dotenv.config({path:'./config/config.env'})

const mongoose = require('mongoose')
const url = process.env.URL



const app= express()
mongoose.connect(url , {useNewUrlParser:true})
const con = mongoose.connection

con.on('open' , ()=>{
    console.log('connected...')
})

app.use(cookieParser())

app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT ;


app.use('/profile', express.static('profile'));

const allroutes = require('./routes/index')
app.use('/api', allroutes);
// app.use('/send', mailsent);
app.use(function (err, req, res, next) {
  
    // render the error page
    res.status(err.status || 500);
    res.send({
      status_code: 500,
      message: err.message,
      data: "",
    });
  });


  
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });
module.exports= app;