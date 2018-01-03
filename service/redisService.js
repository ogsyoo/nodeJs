var db = require('../common/db/redis_db');
var redisDao = require('../dao/redis_dao');
var that = {
    setAuthor:function (cb) {
        var params = {
            gsy:{"name":"name"}
        }
        redisDao.set(params,function (err,data) {
            cb(null,data);
        })        
    }
}
module.exports = that;