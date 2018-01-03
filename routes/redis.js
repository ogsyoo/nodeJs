var express = require('express');
var router = express.Router();
var weRes = require('../common/util/weRes');
var app = express();
var redisService = require('../service/redisService');
router.get("/test",function(req,res){
    redisService.connect(weRes.exportJson.bind(null,res));
});
module.exports=router;