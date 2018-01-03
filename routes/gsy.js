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
    async.auto({
        func1: function (callback, results) {
            callback(null, "abc", "bbc");
        },
    
        func2: function (callback, results) {
            console.log("Print#1:\n" + util.inspect(results));
            callback(null, { "puncha": "during" });
        },
        func3: ["func2", function (callback, results) {
            console.log("Print#2:\n" + util.inspect(results));
            callback(null, 3);
        }],
        func4: ["func1", "func3", function (callback, results) {
            console.log("Print#3:\n" + util.inspect(results));
            callback(null);
        }]
    });
    http.get(weRes.exportJson.bind(null,res));
})
module.exports = router;