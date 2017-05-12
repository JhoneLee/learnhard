<template>
    <div>
        <h1>watch 方法测试</h1>
        <div>{{message}}</div>
        <input v-model="message"/>
        <button @click="changeFunc">点击</button>
        <watch-child :title="message"></watch-child>
    </div>
</template>
<script>
    import watchChild from '../common/watchChild';
    export default {
        data(){
            return {
                message:'hhhh'
            };
        },
        components:{
            watchChild
        },
        created(){
            // 观察属性值的改变
            this.$watch('message',function(a,b){
                console.log('$watch',a,b);
            });
            // $watch方法也只能观察数据的变化
            this.$watch('func1',function(a,b){
                console.log('$watch.func',a,b);
            });
        },
        watch:{
            message:'watchData',
            // 只能watch数据的改变，不能watch方法
            func1:'changeFunc'
        },
        methods:{
            watchData(){
                console.log('watch方法',this.message);
            },
            func1(a){
                console.log(a);
            },
            func2(b){
                alert(b);
            },
            changeFunc(){
                console.log('changeFunc');
                this.func1 = ()=>{
                    console.error('heheda');
                }
            }
        }
    }
</script>