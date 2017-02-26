<template>
    <div class="index-page page">
        <div class="page-content">
            <div class="page-header">
            </div>
            <div class="blog-list">
                <div class="blog-item" v-for="(item,index) in bloglist">
                    <BlogItem :item="item"></BlogItem>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BlogItem from '../components/BlogItem'
    import Tool from '../fetch'
    export default {
        data () {
            return {
                bloglist:[

                ]
            }
        },
        components:{
            BlogItem,
        },
        created:function(){
            var self = this;
            Tool.fetch({url:'blog',method:'GET'},function(data){
                self.bloglist = data.data.list;
            });
        }
    }
</script>
<style lang="less" scoped>
    .page{
        width:100%;
        .page-content{
            height:1000px;
            overflow:auto;
            .page-header{
                height:200px;
                background-image:url('../assets/index.jpg');
                background-repeat:no-repeat;
                background-position:center;
                background-size:cover;
            }
            .blog-list{
                padding: 0 20px;
                min-width: 320px;
                max-width:720px;
                margin:0 auto;
                margin-top:20px;
            }
        }
    }
</style>