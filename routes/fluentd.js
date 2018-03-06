var express = require('express');
var router = express.Router();
var weRes = require('../common/util/weRes');
var gsy = require('../service/gsy/fileOperate');
var http = require('../service/gsy/http');
//复制照片
router.get('/test',function(req,res){
   res.json({success:1,msg:"test"});
})
module.exports = router;