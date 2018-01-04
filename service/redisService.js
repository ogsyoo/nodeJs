var db = require('../common/db/redis_db');
var redisDao = require('../dao/redis_dao');
var async = require("async");
var that = {
    setAuthor: function (params, callback) {
        if (params) {
            var [selectdb, key, value] = [params.dbNo, params.userName, params.passWord];
            console.log(selectdb, key, value)
        }
        async.auto({
            getConnect: function (cb) {
                redisDao.connect(function (error, data) {
                    if (error) {
                        cb(error);
                    } else {
                        cb(null, data);
                    }
                })
            },
            selectDb: ["getConnect", function (rs, cb) {
                redisDao.slectDb(selectdb, function (err, data) {
                    cb(null, data);
                })
            }],
            setData: ['selectDb', 'getConnect', function (rs, cb) {
                redisDao.setString(key, value, function (err, data) {
                    cb(null, data);
                })
            }],
            // setDatas: ['selectDb', 'getConnect', function (rs, cb) {
            //     redisDao.setAll(params, function (err, data) {
            //         cb(null, data);
            //     })
            // }]
        }, function (err, data) {
            console.log(data);
            callback(null, result.getData);
        })
    },
    getAuthor: function (params,callbck) {
        if(params){
            var [selectdb,key] = [params.dbNo, params.userName]
        }
        async.auto({
            getConnect: function (cb) {
                redisDao.connect(function (err, data) {
                    if (err)
                        cb(err);
                    cb(null, data);
                })
            },
            selectDb: ["getConnect", function (rs, cb) {
                redisDao.slectDb(selectdb, function (err, data) {
                    cb(null, data);
                })
            }],
            getData: ['getConnect','selectDb', function (rs, cb) {
                redisDao.getString(key, function (err, data) {
                    if (err)
                        cb(err);
                    cb(null, data);
                })
            }]
        }, function (err, result) {
            if (err)
                callbck(err);
            callbck(null, result.getData);
        })

    }
}
module.exports = that;