/*
* @Author: liyunjiao
* @Date:   2017-05-04 15:29:29
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-08 16:11:46
*/

var hotMiddleware = require('webpack-hot-middleware/client');
hotMiddleware.subscribe((event)=>{
    if(event.action === 'reload'){
        window.location.reload();
    }
});