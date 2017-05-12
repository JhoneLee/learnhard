/*
* @Author: liyunjiao
* @Date:   2017-05-03 11:30:02
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-04 15:03:47
*/

var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');
module.exports = {
    entry:path.resolve(__dirname,'./src/entry.js'),
    output:{
        path:path.resolve(__dirname,'./output/static'),
        publicPath:'/',
        filename:'[name].[hash].js',
        chunkFilename:'[id].[chunkhash].js'
    },
    resolve:{
        extensions:['.js','.vue'],
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    module:{
        loaders: [
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },{
                test: /\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    // plugins: [
    //     new webpack.optimize.OccurrenceOrderPlugin(),
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoErrorsPlugin(),
    //     new HtmlWebpackPlugin({
    //         filename:'index.html',
    //         template:path.resolve(__dirname,'./index.html'),
    //         inject:true
    //     })
    // ]
};
