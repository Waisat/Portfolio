const express = require('express');
const router= express.Router();
const home = require('../models/home');
const mongoose = require('mongoose');
const db= "mongodb+srv://jlg06:Dragonball06@cluster1-5akod.mongodb.net/portfolio?retryWrites=true&w=majority"

mongoose.Promise= global.Promise;
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if(err){
    console.log('error' ,err)
  }

})
router.get('/home', function (req, res) {

  home.find()
    .exec(function (err, home) {
      if(err){
        console.log('error to load database', err)
      }else{
        console.log('Get Home info')
        res.json(home)
      }

    })
})


router.get('/home/:id', function (req, res) {
  console.log('Get by id');
  home.findById(req.params.id)
    .exec(function (err, home) {
      if(err){
        console.log('error to load database', err)
      }else{
        res.json(home)
      }

    })

})

router.post('/home', function (req, res) {
  console.log('post home');
  let postHome = new home()
  postHome.services= req.body.services
  postHome.servicesArray= req.body.servicesArray
  postHome.needsAndExpectation= req.body.needsAndExpectation
  postHome.crew= req.body.crew


  postHome.save(function (err, insertedHome) {
    res.json(insertedHome)

  })

})


router.put('/home/:id', function (req, res) {
  console.log('update Home');

  home.findByIdAndUpdate(req.params.id,
    {$set:{services:req.body.services, servicesArray: req.body.servicesArray, needsAndExpectation: req.body.needsAndExpectation,
        crew: req.body.crew}},
    {
      new: true
    },
    function (err, updatedHome) {
      if (err) {
        res.send('error Updating Home')
      } else {
        res.json(updatedHome)
      }


    })

})


router.delete('/home/:id', function (req, res) {
  console.log('Delete of home')
  home.findByIdAndRemove(req.params.id,function (err, deletedHome) {
    if(err){
      res.send('not deleted')
    }else{
      res.json(deletedHome)
    }
  })
})

module.exports= router;
