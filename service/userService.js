var that = {
    showUsers:function (req,res,callback) {
        var users = [{name:'gsy',age:30},{name:'gw',age:20},{name:'wq',age:32}];
        callback(null,users);
    }
}

//这是接口
module.exports= that;