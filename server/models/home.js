const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const homeSchema= new Schema({
  services:String,
  servicesArray:Array,
  needsAndExpectation:Array,
  crew:Array

})

module.exports= mongoose.model('home', homeSchema, 'home')
