var express = require('express');
var router = express.Router();
var weRes = require('../common/util/weRes');
var gsy = require('../service/gsy/fileOperate');
var http = require('../service/gsy/http');
//复制照片
router.get('/copyImage',function(req,res){
    var path = "d:/old.png"
    gsy.copyIamge(path,weRes.exportJson.bind(null,res));
})
//http 请求
router.get('/http',function(req,res){
    http.get(weRes.exportJson.bind(null,res));
})
module.exports = router;