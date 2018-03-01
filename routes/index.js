var express = require('express');
var router = express.Router();
var weRes = require('../common/util/weRes');
var app = express();
var async = require('async');
var util = require('util');
var logger = require('fluent-logger');
/* GET home page. */
router.get('/test', function (request, response) {
    logger.emit('follow', { from: ' userA ', to: ' userB ' });
    response.send('Hello World');
});
router.get('/', function (req, res) {
    res.render('index', { title: 'Login' });
});
router.post('/login', function (req, res) {
    var name = req.body.name;
    var password = req.body.password;
    var data = { name: name, password: password };
    weRes.exportJson(res, null, data);
});
router.get('/async', function (req, res) {
    async.auto({
        fun1: function (callback) {
            var Arr = [];
            for (var i = 0; i < 100000; i++) {
                Arr.push(i);
            }
            callback(null, Arr)
        },
        fun2: ['fun1', function (callback, results) {
            var Arr = results.Arr
            //和map一样，但是同步执行  2.944
            console.time('mapSeries');
            async.mapSeries(Arr, function (item, callback) {
                callback(null, parseInt(item) - 1);
            }, function (err, results) {
                console.log("mapSeries:" + results);
            });
            console.timeEnd('mapSeries');
            //map限制并发个数   3.452ms
            console.time('mapLimit');
            async.mapLimit(Arr, 1, function (item, callback) {
                callback(null, parseInt(item) - 1);
            }, function (err, results) {
                console.log("mapLimit:" + results);
            });
            console.timeEnd('mapLimit');
            //map 4.394ms
            console.time('map');
            async.map(Arr, function (item, callback) {
                callback(null, parseInt(item) - 1);
            }, function (err, results) {
                console.log("map:" + results);
            });
            console.timeEnd('map');
            weRes.exportJson(res, null, "data");
        }]
    })
});
module.exports = router;
