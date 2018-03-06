var elasticsearch = require('elasticsearch');
var express = require('express');
var router = express.Router()
//使用默认方式连接到 elastic   localhost:9200
// var Client = new elasticsearch.Client();
var client = elasticsearch.Client({
    host: 'http://127.0.0.1:9200/',
    log: 'error'
});
router.get("/add", function (req, res) {
    client.index({
        index: 'test', //相当于database
        type: 'gsy',  //相当于table
        id: JSON.stringify(new Date().getTime()),// 数据到唯一标示，id存在则为更新，不存在为插入
        body: {
            title: 'Test 1',
            tags: ['gsy', 'zhg'],
            published: true,
            published_at: new Date(),
            counter: 1,
            name: "111"
        }//文档到内容
    }, (error, response) => {
        console.log(error)
        console.log(response)
        
        res.send(response);
    });
});
router.get("/del", function (req, res) {
    client.delete({
        index: 'test',
        type: 'gsy',
        id: '1520233691682'
    }, (error, response) => {
        // ...删除id为3的数据
        res.send(response)
    });
});
router.get("/search", function (req, res) {
    client.search({
        index: 'test',
        type: 'gsy',
        body: {
            query: {
                match:{
                  name:'999'
                }
                // "terms": {
                //     "_id": ["1520233933499", "1520233931345"]
                // }
            }
        }
    }, function (error, response) {
        // ...
        // response.hits.hits.map((v) => { console.log(v); res.end(v) })
        res.json(response);
    });
})
module.exports = router;