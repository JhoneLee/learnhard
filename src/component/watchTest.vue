<template>
    <div>
        <h1>watch 方法测试</h1>
        <div>{{message}}</div>
        <input v-model="message"/><br/>
        First:<input v-model="firstName"/> lastName:<input v-model="lastName"/>
        <div>name : {{userName}}</div>
        <button @click="changeFunc">点击</button>
        <watch-child :title="message"></watch-child>
        <br>
        <h2>watch对引用类型改变的触发条件</h2>
        <input v-model="jsonData"/>
    </div>
</template>
<script>
    import watchChild from '../common/watchChild';
    import fetch from '../utils/fetch';
    export default {
        data(){
            return {
                message:'hhhh',
                firstName: 'jack',
                lastName: 'bush',
                jsonData:'{}'
            };
        },
        components:{
            watchChild
        },
        computed:{
            userName(){
                return this.firstName + '-' + this.lastName;
            },
            objData(){
                return JSON.parse(this.jsonData);
            }
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
            func1:'changeFunc',
            //还能够watch computed属性
            userName(){
                console.log(this.userName+'输出');
            }
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