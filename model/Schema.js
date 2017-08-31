//importing required dependencies
let mongoose = require('mongoose');
mongoose.set('debug',true);
let schema = mongoose.Schema;
//defining schema of our collection
let assigSchema = new schema({
	name : String,
	age : Number,
	mobile : Number
},{collection : "info", versionKey : false});
let model = mongoose.model('info',assigSchema);
//exporting model
module.exports = model;