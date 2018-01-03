var redis = require('redis');
var db = require('../common/db/redis_db');
var that = {
    connect: function (cb) {
        var client = redis.createClient(db.RDS_PORT, db.RDS_HORT, db.RDS_OPTS);
        client.on("ready", function (res) {
            cb(null, "redis 连接成功");
        });
        try {
            client.on("error", function (error) {
                cb(error,"连接失败");
            })
        } catch (error) {
            console.log(2);
        }
    }
}
module.exports = that;