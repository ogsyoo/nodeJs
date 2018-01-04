var express = require('express');
var router = express.Router();
var weRes = require('../common/util/weRes');
var app = express();
var redisService = require('../service/redisService');
router.get("/setAuthor", function (req, res) {
    var setParams = {
        dbNo: 1,
        userName: "gsy",
        passWord: "5buhui3xin"
    };
    redisService.setAuthor(setParams,weRes.exportJson.bind(null, res));
});
router.get("/getAuthor", function (req, res) {
    var getParams = {
        dbNo: 1,
        userName: "gsy",
    }
    redisService.getAuthor(getParams,weRes.exportJson.bind(null, res));
});

module.exports = router;