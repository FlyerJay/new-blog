<template>
    <div class="page blog-page" flex="dir:top">
        <nav-bar
            :title='blog.title'
            :onExpand='onExpand.bind(this)'
        />
        <div class="page-content" @click="closeShow">
            <div class="blog">
                <h2 class="title">{{blog.title}}</h2>
                <aside flex="dir:left cross:center">
                    <div class="catalog">{{blog.Catalog.catalogName}}</div>
                    <div class="time">{{blog.createdAt | timeFilter}}</div>
                    <div class="read">阅读{{blog.hit}}</div>
                    <div class="love">喜欢{{blog.love}}</div>
                </aside>
                <article  v-html="blog.article"></article>
            </div>
            <div class="clickbar" flex="dir:left main:center">
                <div class="praise-btn" @click="praise"><i class="iconfont icon-praise"></i></div>
            </div>
            <div class="praise-animate" :class="{'do-animate':animate}">
                <i class="iconfont icon-praise"></i>
            </div>
        </div>
    </div>
</template>
<script>
    import Tool from '../utils/Tool';
    import NavBar from '../components/NavBar';
    import Indicator from '../components/Indicator';
    export default{
        data () {
            return {
                blog:{
                    Catalog:{

                    },
                },
                isPraise:false,
                animate:false,
            }
        },
        components:{
            NavBar
        },
        methods:{
            onExpand:function(){
                this.$parent.show = !this.$parent.show
            },
            closeShow:function(){
                this.$parent.show = false;
            },
            praise:function(){
                if(this.isPraise) return;
                Tool.get('love/'+this.blog.blogId,{},(data)=>{
                    this.blog.love ++;
                    this.animate = true;
                })
                setTimeout(()=>{Indicator.close()},0);
                this.isPraise = true;
            }
        },
        created:function(){
            var blogId = this.$route.params.id;
            Tool.get('blog/'+blogId,{},(data)=>{
                this.blog = data.data;
            });
            Tool.get('view/'+blogId,{},(data)=>{
            })
        },
        filters:{
            timeFilter:function(val){
                return (val+'').substring(0,10) + ' ' + (val+'').substring(11,19)
            }
        }
    }
</script>
<style lang="less">
    .page{
        height:100%;
        overflow:hidden;
        height:100%;
        .page-content{
            overflow:auto;
            height:100%;
            .blog{
                max-width: 720px;
                margin: 0 auto;
                min-width: 320px;
                padding: 0 20px;
                .title{
                    line-height: 2em;
                    font-size: 32px;
                }
                aside{
                    font-size: 12px;
                    color: #888;
                    cursor: pointer;
                    .catalog{    
                        color: #ec6149;
                        border-radius: 2px;
                        border: 1px solid #ec6149;
                        padding: 2px 5px;
                    }
                    &>div{
                        margin-right:5px;
                    }
                }
                article{
                    blockquote{
                        display: block;
                        border-left: 8px solid #d0e5f2;
                        padding: 5px 10px;
                        margin: 10px 0;
                        line-height: 40px;
                        font-size: 20px;
                        background-color: #f1f1f1;
                    }
                    p{
                        color: #333;
                        line-height: 2em;
                    }
                    pre{
                        background-color:#efefef;
                        padding:20px;
                        line-height:1.5em;
                        border-radius:5px;
                        border:1px solid #ccc;
                        color:#444;
                        overflow-x:auto;
                        code{
                            .hljs-tag{
                                color:gray;
                                .hljs-name{
                                    color:#3091f2;
                                }
                                .hljs-attr{
                                    color:#5cadff;
                                }
                                .hljs-string{
                                    color:#ff9900;
                                }
                            }
                            .hljs-keyword{
                                color:#3091f2;
                            }
                            .hljs-selector-class{
                                color:#aaa;
                                margin-right:2px;
                            }
                            .hljs-attribute{
                                color:#ff6600;
                                margin-right:2px;
                            }
                            .hljs-number{
                                color:#00cc66;
                            }
                            .hljs-string,.hljs-regexp{
                                color:#ff9900;
                            }
                            .hljs-built_in{
                                color:#5cadff;
                            }
                            .hljs-comment{
                                color:#00cc66;
                            }
                        }
                    }
                    a{
                        text-decoration: none;
                        color: #4183c4;
                        &:hover{
                            text-decoration:underline;
                        }
                    }
                    ul{
                        background-color: #f8f8f8;
                        li{
                            list-style: square;
                            color: #333;
                            font-size: 14px;
                            line-height: 2em;
                            &:nth-child(2n){
                                background-color:#fcfcfc;
                            }
                        }
                    }
                    ol{
                        background-color: #f8f8f8;
                        li{
                            color: #333;
                            font-size: 14px;
                            line-height: 2em;
                            &:nth-child(2n){
                                background-color:#fcfcfc;
                            }
                        }
                    }
                    img{
                        max-width:100%;
                    }
                }
            }
            .clickbar{
                height:40px;
                margin-bottom:100px;
                .praise-btn{
                    text-align:center;
                    width:100px;
                    border-radius:20px;
                    cursor:pointer;
                    .iconfont{
                        font-size:36px;
                        color:#3498db;
                    }
                }
            }
            .praise-animate{
                text-align:center;
                position:absolute;
                width:100px;
                height:100px;
                top:50%;
                left:50%;
                margin-top:-50px;
                margin-left:-50px;
                opacity:0;
                .iconfont{
                    font-size:90px;
                    line-height:100px;
                    color:green;
                }
                &.do-animate{
                    animation:bigger 1s ease-in;
                }
            }
            @keyframes bigger{
                0%{
                    display:block;
                    opacity:.5;
                    transform:scale(1);
                };
                10%{
                    opacity:1;
                    transform:scale(3);
                };
                70%{
                    opacity:1;
                    transform:scale(3)
                }
                100%{
                    opacity:0;
                    display:none;
                    transform:scale(12);
                }
            }
        }
    }
</style>