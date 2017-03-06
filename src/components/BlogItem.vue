<template>
    <div class="item">
        <div class="top-aside" flex="dir:left cross:center">
            <div class="source">原创</div>
            <div class="time"><i class="iconfont icon-time"></i>{{item.createdAt|datefilter}}</div>
        </div>
        <div class="title">{{item.title}}</div>
        <p>
            {{item.summary}}
            <span class="learn-more" @click="learnMore(item.blogId)"><i class="iconfont icon-learn"></i>阅读全文</span>
        </p>
        <div class="bottom-aside" flex="dir:left cross:center">
            <div class="catalog">{{item.Catalog.catalogName}}</div>
            <span class="hit"><i class="iconfont icon-view"></i>{{item.hit}}</span>
            <span class="love"><i class="iconfont icon-praise"></i>{{item.love}}</span>
        </div>
    </div>
</template>
<script>
    export default{
        data () {
            return {

            }
        },
        props:{
            item:{
                type:Object,
                default:{}
            }
        },
        filters:{
            datefilter:function(val){
                return (val+'').substring(0,10)
            }
        },
        methods:{
            learnMore:function(id){
                this.$router.push({path:'/blog/'+id})
            }
        }
    }
</script>
<style lang="less" scoped>
    .item{
        .top-aside{
            .source{
                background-color: #ec6149;
                color: #fff;
                padding: 1px 3px;
            }
            .time{
                font-size: 14px;
                color: #999;
                margin-left:10px;
            }
        }
        .title{
            font-size: 18px;
            font-weight: 700;
            line-height: 2em;
        }
        p{
            font-size: 14px;
            line-height: 2em;
            .learn-more{
                color: #06c;
                cursor: pointer;
            }
            .learn-more:hover{
                text-decoration:underline;
            }
        }
        .bottom-aside{
            font-size:12px;
            .catalog{
                color: #ec6149;
                border-radius: 2px;
                border: 1px solid #ec6149;
                padding: 2px 5px;
            }
            span{
                font-size: 12px;
                padding: 0 5px;
                color: #999;
                cursor: pointer;
            }
            span:hover{
                color: #333;
            }
        }
    }
</style>