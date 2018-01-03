var redis = require('redis');
var db = require('../common/db/redis_db');
var async = require('async');
client = redis.createClient(db.RDS_PORT, db.RDS_HORT, db.RDS_OPTS);
var that = {
    slectDb: function (dbNo, cb) {
        client.select(slectDb, function (err) {
            if (err) cb(err);
            cb(null);
        })
    },
    /**
     * string 设置数据
     * @param slectDb
     * @param params
     * @param cb
     */
    set: function (slectDb, params, cb) {
        for (var key in params) {
            client.set(key, params[key], function (err) {
                if(err)
                    cb(err);
            });
        }
        cb(null,"ok");
    }
}
module.exports = that;