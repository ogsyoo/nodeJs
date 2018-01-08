var http = require('http');
var qs = require('querystring');
var that = {
    //get请求
    get: function (callback) {
        //这是需要提交的数据  
        var data = {
            a: 123,
            time: new Date().getTime()
        };
        var content = qs.stringify(data);
        console.log(content);
        var options = {
            hostname: '127.0.0.1',
            port: 8080,
            path: '/api/gsy?'+content,
            method: 'GET'    //如果是post   在这更改就好
        };
        var req = http.request(options, function (res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                callback(null,'BODY: ' + chunk);
            });
        });
        // req.on('error', function (e) {
        //     callback('problem with request: ' + e.message);
        // });
        req.end();
    }
}

module.exports = that;