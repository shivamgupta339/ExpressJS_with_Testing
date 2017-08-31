//importing required dependencies
let express = require('express');
let router = express.Router();
let info = require('./../model/Schema');
//retrieving data from database
router.get('/', (req, res, next)=> {
  info.find({},(err,data)=>{
  	if(err){
  		console.log(err);
  	}
   	else{
  		res.json({data:data});
  	}
	})
});
//exporting router
module.exports = router;