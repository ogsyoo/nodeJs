var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Login'});
});
router.get('/login', function (req, res) {
    var name = req.query.name;
    var password = req.query.password;
    var data = {name:name,password:password};
    // res.send(JSON.stringify(data));
    res.render('info',data);
});

module.exports = router;
