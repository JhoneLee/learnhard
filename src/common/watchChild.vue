<template>
    <h2>{{title}}</h2>
</template>
<script>
    export default {
        data(){
            return {};
        },
        props:['title'],
        watch:{
            title:'logProp'
        },
        created(){
            this.$watch('title',(a,b)=>{
                console.warn('子组件$watch',a,b)
            });
        },
        methods:{
            logProp(){
                console.log('子组件watch',this.title);
            }
        }
    }
</script>