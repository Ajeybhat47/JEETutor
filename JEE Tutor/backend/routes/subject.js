const router = require("express").Router();
const subject=require('../models/subject.model'); 

 
// This will help us connect to the database

// This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongoose").ObjectId;
 
 
// This section will help you get a list of all the records.
router.route("/").get(function (req, res) {
   subject.find().then(subjects=>res.json(subjects))
    .catch(err=>res.status(400).json('Error:'+err))
});

router.route('/:id').get((req,res)=>{
  subject.findById(req.params.id)
  .then(subjects=>res.json(subjects))
  .catch(err=>res.status(400).json('Error:'+err))
})



module.exports = router;