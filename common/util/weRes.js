
module.exports = {
    exportJson: function (res, err, data) {
        res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
        res.status(200);
        if (err) {
            console.log(err);
            var errMsg = err.typeof(err) == 'string' ? err : err.message;
            res.send({ success: 0, errMsg: errMsg })

        } else {
            res.send({ success: 1, message: data });
        }
    }
}

