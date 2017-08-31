//importing required dependencies
let express = require('express');
let router = express.Router();
let info = require('./../model/Schema');
//deleteing data from database
router.delete('/', (req, res, next)=> {
  info.remove({
   	'name' : req.body.name
  },
  (err,data)=>{
    if(err)
    console.log(err);
    else{
      res.json(data);
    }
  })
});
//exporting router
module.exports = router;