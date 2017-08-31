//importing required dependencies
let express = require('express');
let router = express.Router();
let info = require('./../model/Schema');
//Performing insertion of data in database
router.post('/', (req, res, next)=> {
  info.insertMany({
  	"name" : req.body.name,
  	"age" : req.body.age,
  	"mobile" : req.body.mobile
  },(err,data)=>{
  	if(err)
  	console.log(err);
  	else{
  		res.json({data:data});
  	}
  })
});
//exporting router
module.exports = router;
