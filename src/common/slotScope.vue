<template>
    <div>
        <h2 class="spec-h2">scope slot</h2>
        <slot name="scopes" :text="father.name">i am a scope slot</slot><br/>
        <slot name="another">i am another a scope slot</slot>
    </div>
</template>
<script>
    export default {
        data(){
            return {};
        },
        props:["father"],
        mounted(){
            console.log('hehe',this.$slots);
        }
    }
</script>
<style lang="less">
    div .spec-h2{
        color:#D52BD5;
        border:1px dotted black;
    }
</style>