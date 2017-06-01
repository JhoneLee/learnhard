<template>
    <div>
        <h1>fetch研究</h1>
        <span>{{data}}</span>
    </div>
</template>
<script>
    import fetch from '../utils/fetch';
    export default {
        data(){
            return {
                data:'xxx'
            };
        },
        created(){
            let _this=this;
            fetch({
                url:'http://localhost:8808/api/someData',
                success(res){
                    _this.data = JSON.stringify(res);
                },
                fail(res){
                    console.log('error');
                }
            });
        }
    }
</script>