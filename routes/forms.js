var tobitrixLead = require('./bitrixReq.js');
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.send('forms');
});

router.post('/', function(req, res, next) {
console.log(req.body)
    var comment = req.body.comment;
    var phone = req.body.phone;
    var email = req.body.email;
    var name = req.body.name;
    var secondName = req.body.secondName;
    var lastname = req.body.lastname;
    var productID = req.body.productID;
    var SOURCE_DESCRIPTION = req.body.utm;
    var UTMS =JSON.parse(req.body.utm); 
    tobitrixLead.sender(comment,phone,email,name,secondName,lastname,productID,SOURCE_DESCRIPTION,UTMS);
    res.send(name);

});

module.exports = router;
