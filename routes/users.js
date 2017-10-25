var express = require('express');
var router = express.Router();
var userService =require('../service/userService');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/showAll', function(req, res) {
    userService.showUsers(req,res,function (err,data) {
        if(err){
          res.send();
        }else{
          res.send(JSON.stringify(data));
        }
    })
});

module.exports = router;
