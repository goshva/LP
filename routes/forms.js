var tobitrixLead = require('./bitrixReq.js');
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.send('forms');
});

router.post('/', function(req, res, next) {

    var comment = req.body.comment;
    var phone = req.body.phone;
    var email = req.body.email;
    var name = req.body.name;
    var secondName = req.body.secondName;
    var lastname = req.body.lastname;
    var productID = req.body.productID;

    tobitrixLead.sender(comment,phone,email,name,secondName,lastname,productID);
    res.send(name);

});

module.exports = router;
