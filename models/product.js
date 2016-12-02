var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  imagepath: {type: String, required:true},
  title:{type: String, required: true},
  desc:{type:String, required:true},
  price:{type:Number,required:true},

});

module.exports = mongoose.model('product', schema);
