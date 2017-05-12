/*
* @Author: liyunjiao
* @Date:   2017-05-10 15:45:44
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-11 16:12:13
*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import favList from './component/FavList';
import slotTest from './component/slotTest';
import home from './component/home';
const routes = [
    {path:'/',name:'home', component:home,page:'首页'},
    {path:'/favlist',name:'favList',component:favList,page:'生命周期研究'},
    {path:'/slot',name:'slot',component:slotTest,page:'slot研究'},
];
Vue.use(VueRouter);
const router = new VueRouter({
    history: true,
    mode: 'hash',
    routes: routes
});
export {routes};
export {router};
