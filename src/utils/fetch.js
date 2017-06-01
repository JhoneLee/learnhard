/*
* @Author: liyunjiao
* @Date:   2017-05-17 15:26:36
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-19 14:21:08
*/

import es6Promise from 'es6-promise';
import isoFetch from 'isomorphic-fetch';
import _ from 'lodash';
let abc = isoFetch;
export default fetch = (options) => {
    let {url,data,method,headers} = options;
    let option = {
        method,
        headers,
        //body:data,
        mode:'cors',
        cache:'default',
    };
    let reg = /get/i
    if(method =='get'){

    }
    return isoFetch(url,option).then(response=>{
        if(response.status == 200){
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    })
};