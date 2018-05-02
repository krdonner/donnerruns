const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/blodDb'

app.get('/api/user/login', (req, res) => {
  res.send('Hello World!')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/user/login', (req, res) => {
  mongoose.connet(url, function(err){
    if(err) throw err;
    console.log('connected successfully, username is ', req.body.username,' password is ', req.body.password);
  });
})

app.listen(3000, () => console.log('blog server running on port 3000!'))
