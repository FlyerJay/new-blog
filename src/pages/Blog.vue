<template>
    <div class="page blog-page">
        <div class="pag-content">

        </div>
    </div>
</template>
<script>
    import Tool from '../fetch'
    export default {
        data () {
            return {

            }
        },
        created:function(){
            var blogId = this.$route.params.id;
            Tool.fetch({url:'blog/'+blogId,method:'GET'},function(data){
                console.log(data);
            })
        }
    }
</script>
<style lang="less" scoped>
    
</style>