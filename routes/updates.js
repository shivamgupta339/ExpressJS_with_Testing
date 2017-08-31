//importing required dependencies
let express = require('express');
let router = express.Router();
let info = require('./../model/Schema');
//Performing updation of data stored in database
router.put('/:name', (req, res, next)=> {
  info.update({
    name : req.params.name
  },
  {$set : {age: req.body.age}
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