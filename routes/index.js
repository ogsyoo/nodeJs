var express = require('express');
var router = express.Router();
var weRes = require('../common/util/weRes');
var app = express();
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Login'});
});
router.post('/login', function (req, res) {
    var name = req.body.name;
    var password = req.body.password;
    var data = {name:name,password:password};
    weRes.exportJson(res,null,data);
});
router.get('/gsy',(req,res) => {
    // 通过模型去查找数据库
   res.send("gsy123124214");
});
module.exports = router;
