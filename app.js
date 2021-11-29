const express = require("express");
const bodyParser = require('body-parser');

// const nodemailer = require("nodemailer");

const mongoose = require('mongoose')
const url = 'mongodb://localhost/gyandb'



const app= express()
mongoose.connect(url , {useNewUrlParser:true})
const con = mongoose.connection

con.on('open' , ()=>{
    console.log('connected...')
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;


const allroutes = require('./routes/index')
app.use('/api', allroutes);
// app.use('/send', mailsent);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
