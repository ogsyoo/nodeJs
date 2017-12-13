/******************************************************************************
 *
 * NAME
 *   webRes.js
 *
 * DESCRIPTION
 * Web输出
 *****************************************************************************/

module.exports = {
    /**
     * @param {NSExpress.Response} res
     * @param  {Error|String} err
     * @param  {Object} data
     */
    exportJson: function (res, err, data) {
        res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
        res.status(200);
        if (err) {
            console.log(err);
            var msg = typeof err == "string" ? err : err.message;
            res.send({ 'success': 0, "errMsg": msg });
        }
        else {
            res.send({ 'success': 1, "data": data });
        }
    },
    exportJsonXDomain: function (res, err, data) {
        //跨域
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", 'CIG');
        
        res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
        if (err) {
            console.log(err);
            var msg = typeof err == "string" ? err : err.message;
            res.send({ 'success': 0, "errMsg": msg });
        }
        else {
            res.send({ 'success': 1, "data": data });
        }
    },
    exportRestJson: function (res, err, data) {
        res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
        if (err) {
            console.log(err);
            var msg = typeof err == "string" ? err : err.message;
            res.send({ 'success': 0, "errMSG": msg });
        }
        else {
            if (data[0] == "get") {
                var results = {
                    success: 1,   
          //          data:{
                        rows: data[1],
                        total: data[2]
           //         }              
                }
                res.send(results);
            }
            if (data[0] == "delete" || data[0] == "insert" || data[0] == "update") {
                var results = {
                    success: 1,
                    data: data[1]
                }
                res.send(results);
            }

        }
    },
      exportImage: function (res, err, data) { 
        if (err) {
            res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
            res.status(200);
            res.send({ 'success': 0, "errMsg": err});
        }
        else {
            if (data != null) {
                if (data.photoPath != null) {
                    var pictureService = require(ROOT_DIR + "/common/service/zhzl/pictureService");
                    var photoPath = data.photoPath;
                    res.set({'Content-Type':'image/jpeg'});
                    res.status(200);
                    pictureService.sendFile("", photoPath, res);
                }
                else {
                    res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
                    res.status(200);
                    res.send({ 'success': 0, "errMsg": "没有获取到相应照片" });
                }
            }
        }

    },
    exportImageBySqclImg: function (res, err, data) {
        if (err) {
            res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
            res.status(200);
            res.send({ 'success': 0, "errMsg": err});
        }
        else {
            if (data != null) {
                if (data.sqclImg != null) {
                    var pictureService = require(ROOT_DIR + "/common/service/zhzl/pictureService");
                    var sqclImg= data.sqclImg;
                    res.set({'Content-Type':'image/jpeg'});
                    res.status(200);
                    pictureService.sendFile("", sqclImg, res);
                }
                else {
                    res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
                    res.status(200);
                    res.send({ 'success': 0, "errMsg": "没有获取到相应照片" });
                }
            }
        }
    },
     exportImageByShclImg: function (res, err, data) {
        if (err) {
            res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
            res.status(200);
            res.send({ 'success': 0, "errMsg": err});
        }
        else {
            if (data != null) {
                if (data.shclImg != null) {
                    var pictureService = require(ROOT_DIR + "/common/service/zhzl/pictureService");
                    var shclImg= data.shclImg;
                    res.set({'Content-Type':'image/jpeg'});
                    res.status(200);
                    pictureService.sendFile("", shclImg, res);
                }
                else {
                    res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
                    res.status(200);
                    res.send({ 'success': 0, "errMsg": "没有获取到相应照片" });
                }
            }
        }
    },
    // exportRestJson:function (res,err,data) {
    //     res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
    //     res.status(200);
    //     if(err){
    //         console.log(err);
    //         var msg = typeof err == "string" ? err : err.message;
    //         res.send({'success':0,"err":msg});
    //     }
    //     else{
    //             if (data[0] == "get") {
    //                 var results = { success: 1,
    //                     rows: data[1],
    //                     total: data[2] }
    //                 res.send(results);
    //             }
    //             if (data[0] == "delete"||data[0] == "insert"||data[0] == "update") {
    //                 var results = {
    //                     success: 1,
    //                     state: data[1] }
    //                 res.send(results);
    //             }
};

