<template>
    <div>
        <h2>{{title}}</h2>
        <div class="div1">
            <slot name="isSpan">i'am a slot</slot>
        </div>
        <div class="div2">
            <slot name="isDiv">i'am another slot</slot>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {};
        },
        props:['title'],
        mounted(){
            // 相同的以slot=""引入的插口组件，却得不到template插入的
            console.log('yyyy',this.$slots);
        }
    }
</script>
<style lang="less">
    h2{
        color:#33AECC;
    }
    .div1{
        color:green;
    }
    .div2{
        color:blue;
    }
</style>