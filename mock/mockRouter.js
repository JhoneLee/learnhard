/*
* @Author: liyunjiao
* @Date:   2017-05-17 10:40:27
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-18 14:05:24
*/

var path = './mock/';
module.exports={
    routes:[
        {file:path+'watchTest.json',api:'/api/watchtest'},
        {file:path+'someData.json',api:'/api/someData',status:'400'}
    ]
}
