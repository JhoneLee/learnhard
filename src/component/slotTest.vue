<template>
    <div>
        <h1 class="title">{{title}}</h1>
        <slot-child title="slot子组件">
            <span slot="isDiv">span span</span>
            <div slot="isSpan">hahahaah</div>
            <p slot="isDiv">ppp</p>
        </slot-child>
        <slot-scope :father="myData">
            <template scope="props" slot="scopes">
                <div>呵呵哒</div>
                <span>{{props.text}}</span>
            </template>
        </slot-scope>
    </div>
</template>
<script>
    import slotChild from '../common/slot.vue';
    import slotScope from '../common/slotScope';
    export default {
        data(){
            return {
                title:'slot 研究',
                myData:{
                    name:'jack'
                }
            };
        },
        components:{
            slotChild,
            slotScope
        },
        // created(){
        //     console.log('xxx',this.$scopedSlots);
        // },
        mounted(){
            console.log('xxx',this.$slots);
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