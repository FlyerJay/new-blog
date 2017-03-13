<template>
    <div class="index-page page" flex="dir:top">
        <nav-bar
            title='SnowBlog主页'
            :onExpand="onExpand.bind(this)"
        />
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
    import Tool from '../utils/Tool'
    import NavBar from '../components/NavBar'
    export default {
        data () {
            return {
                bloglist:[

                ]
            }
        },
        methods:{
            onExpand:function(){
                this.$parent.show = !this.$parent.show
            }
        },
        components:{
            BlogItem,
            NavBar
        },
        created:function(){
            var self = this;
            Tool.get('blog',{},function(data){
                self.bloglist = data.data.list;
            });
        }
    }
</script>
<style lang="less" scoped>
    .page{
        width:100%;
        height:100%;
        overflow:auto;
        .page-content{
            height:100%;
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
                .blog-item{
                    padding: 20px 0;
                    border-bottom: 1px solid #e0e0e0;
                }
            }
        }
    }
</style>