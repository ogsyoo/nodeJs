var redis = require('redis');
var db = require('../common/db/redis_db');
var async = require('async');
var client;
var that = {
    /**
     * 连接redis数据库
     * @param cb
     */
    connect: function (cb) {
        if (!client) {
            client = redis.createClient(db.RDS_PORT, db.RDS_HORT, db.RDS_OPTS);
            client.on('error', function (error) {
                console.log("连接错误");
                cb(error);
            });
            client.on('ready', function (err) {
                console.log("连接成功");
                if (err) cb(err);
                cb(null, "连接成功");
            });
        } else {
            console.log("已连接");
            cb(null, "已连接");
        }
    },
    /**
     * 选择数据库
     * @param dbNo
     * @param cb
     */
    slectDb: function (dbNo, cb) {
        client.select(dbNo, function (err, response) {
            if (err) cb(err);
            cb(null, response);
        })
    },
    /**
     * string 设置数据
     * @param slectDb
     * @param params
     * @param cb
     */
    setString: function (key, value, cb) {
        client.set(key, value, function (err, response) {
            if (err) cb(err);
            cb(null, "插入成功");
        });
    },
    /**
     * string 设置多个数据
     * @param params
     * @param cb
     */
    setAll: function (params, cb) {
        if (params) {
            for (let key in params) {
                client.set(key, params[key], function (err) {
                    if (err)
                        cb(err);
                });
            }
            cb(null,"插入成功");
        }
    },
    /**
     * string 获取数据
     * @param key
     * @param cb
     */
    getString:function (key,cb) {
        client.get(key,function (err,response) {
            if (err)
                cb(err);
            cb(null,response);
        });
    }
}
module.exports = that;