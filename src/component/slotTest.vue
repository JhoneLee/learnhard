<template>
    <div>
        <h1 class="title">{{title}}</h1>
        <slot-child title="slot子组件"></slot-child>
    </div>
</template>
<script>
    import slotChild from '../common/slot.vue';
    export default {
        data(){
            return {
                title:'slot 研究'
            };
        },
        components:{
            slotChild
        }
    }
</script>
<style lang="less">
    div{
        color:red;
        .title{
            color:blue;
        }
    }
</style>