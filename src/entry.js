/*
* @Author: liyunjiao
* @Date:   2017-05-03 11:17:07
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-12 14:20:35
*/
import Vue from 'vue';
import App from './app.vue';
import {router} from './router';
// console.log(router);
// debugger
const app = new Vue({
    el:'#app',
    router,
    render: h => h(App)
});

// console.log(app);
// debugger