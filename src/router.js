/*
* @Author: liyunjiao
* @Date:   2017-05-10 15:45:44
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-05-17 15:52:02
*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import favList from './component/FavList';
import slotTest from './component/slotTest';
import home from './component/home';
import watchTest from './component/watchTest';
import vueRouter from './component/vueRouter';
import fetchTest from './component/fetchTest';
const routes = [
    {path:'/',name:'home', component:home,page:'首页'},
    {path:'/favlist',name:'favList',component:favList,page:'生命周期研究'},
    {path:'/slot',name:'slot',component:slotTest,page:'slot研究'},
    {path:'/watch',name:'watch',component:watchTest,page:'watch方法测试'},
    {path:'/route/:id',name:'route/:id',component:vueRouter,page:'vue-route研究'},
    {path:'/fetch',name:'fetch',component:fetchTest,page:'fetch研究'},
];
Vue.use(VueRouter);
const router = new VueRouter({
    history: true,
    mode: 'hash',
    routes: routes
});
export {routes};
export {router};
