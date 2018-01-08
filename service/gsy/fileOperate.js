var fs = require('fs');
var path = require('path');
var that = {
    //复制图片
    copyIamge:function(pathOld,callback){
        var file = path.resolve(pathOld);
        fs.readFile(file,function(err,data){
            if(err){
                callback(err,null);
            }else{
                console.log(data);
                console.log('******************************')
                fs.writeFile(path.resolve('d:/logo.png'),data,function(err){  
                    if(err)  
                        return console.error(err);  
                        callback(null,"保存成功");
                 });  
            }
        })
       
    }
}
module.exports = that