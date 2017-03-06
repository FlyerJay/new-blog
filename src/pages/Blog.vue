<template>
    <div class="page blog-page" flex="dir:top box:mean">
        <div class="page-content">
            <div class="blog">
                <h2 class="title">{{blog.title}}</h2>
                <aside>
                    <div class="catalog">{{blog.Catalog.catalogName}}</div>
                    <div class="time">{{blog.createdAt}}</div>
                    <div class="read">阅读{{blog.hit}}</div>
                    <div class="love">喜欢{{blog.love}}</div>
                </aside>
                <article  v-html="blog.article">
                </article>
            </div>
        </div>
    </div>
</template>
<script>
    import Tool from '../fetch'
    export default{
        data () {
            return {
                blog:{
                    Catalog:{
                        
                    }
                }
            }
        },
        created:function(){
            var blogId = this.$route.params.id;
            Tool.fetch({url:'blog/'+blogId,method:'GET'},(data)=>{
                this.blog = data.data;
            })
        }
    }
</script>
<style lang="less" scoped>
    .page{
        height:100%;
        overflow:hidden;
        .page-content{
            overflow:auto;
            .blog{
                max-width: 720px;
                margin: 0 auto;
                min-width: 320px;
                padding: 0 20px;
            }
        }
    }
</style>