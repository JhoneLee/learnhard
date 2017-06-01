<template>
    <div>
        <h1>目录导航</h1>
        <ul>
            <li v-for="item in items" v-if="item.name!='home'">
                <router-link :to="item.name">{{item.page}}</router-link>
            </li>
        </ul>
    </div>
    
</template>
<script>
    import {routes} from '../router';
    export default {
        data(){
            return {
                items:[]
            };
        },
        created(){
            let reg=/:[0-9A-Za-z]+[^\/]/g;
            this.items=routes.map((e)=>{
                let str = e.name;
                let obj = Object.assign({},e);
                if(reg.test(str)){
                    obj.name=str.replace(reg,'test');
                }
                return obj;
            });
        }
    }
</script>
<style>
    h1{
        color:blue;
    }
    li{
        a{
            color:green;
        }
    }
</style>