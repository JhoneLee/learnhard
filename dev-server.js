/*
* @Author: liyunjiao
* @Date:   2017-05-04 11:24:43
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-17 16:09:33
*/
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var app = express();
var mock = require('./dev-mock');
// var mock = require('./mock/mockRouter.js');
// var loadJsonFile = require('load-json-file');
// app接口配置
app.all('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8808");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var conf = webpack(config);
var dml=devMiddleware(conf,{
    publicPath:config.output.publicPath,
    states:{
        color:true,
        chunks:false,
    },
    debug:true
});
var hml = hotMiddleware(conf);
conf.plugin('compilation',(compilation)=>{
    compilation.plugin('html-webpack-plugin-after-emit',(data,cb)=>{
        hml.publish({
            action:'reload'
        });
        cb();
    });
});
app.use(dml);
app.use(hml);

mock.initMock(app);

app.listen(8808,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('service open');
});