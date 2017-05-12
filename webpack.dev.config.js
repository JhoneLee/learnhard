/*
* @Author: liyunjiao
* @Date:   2017-05-04 14:37:57
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-11 16:37:28
*/
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');
var devClient='./dev-client';
config.entry = [devClient,config.entry];
config.resolve.alias['com$']=path.resolve(__dirname,'./src/common');
config.plugins =[
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:path.resolve(__dirname,'./index.html'),
        inject:true
    })
];

module.exports = config;