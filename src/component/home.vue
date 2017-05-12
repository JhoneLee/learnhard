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
                items:routes
            };
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