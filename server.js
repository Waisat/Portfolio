const express = require('express');
const parser = require('body-parser');
const path= require('path');

const api= require('./server/routes/api');
const port=3000;

const app= express();

app.use(express.static(path.join(__dirname, '/dist')));
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use('/api', api)

app.get('*', (req, res )=>{
  res.sendFile(path.join(__dirname,'dist/index.html'))

});

app.listen(port, function () {
  console.log('Servers is running in port'+ port)

})
