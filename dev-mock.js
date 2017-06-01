/*
* @Author: liyunjiao
* @Date:   2017-05-17 10:37:42
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-18 13:32:37
*/
var mock = require('./mock/mockRouter');
var loadJsonFile = require('load-json-file');
function initMock(app){
    mock.routes.forEach(e=>{
        app.get(e.api,(req,res)=>{
            if(e.status && e.status!=200 && e.status!=304){
                res.status(e.status).end();
            } else {
                loadJsonFile(e.file).then((json)=>{
                    res.end(JSON.stringify(json));
                });
            }
        });
    });
    return app;
}
module.exports = {
    initMock:initMock
}