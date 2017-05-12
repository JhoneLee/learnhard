/*
* @Author: liyunjiao
* @Date:   2017-05-04 11:24:43
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-08 16:16:28
*/
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var app = express();

var conf = webpack(config);
var dml=devMiddleware(conf,{
    publicPath:config.output.publicPath,
    states:{
        color:true,
        chunks:false
    }
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
app.listen(8808,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('service open');
});