<template>
    <div>
        <h2>{{title}}</h2>
        <slot>i'am a slot</slot>
        <br/>
        <slot>i'am another slot</slot>
    </div>
</template>
<script>
    export default {
        data(){
            return {};
        },
        props:['title']
    }
</script>
<style lang="less">
    h2{
        color:##33AECC;
    }
</style>