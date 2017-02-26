<template>
    <div class="item">
        <aside flex="dir:left">
            <div class="source">原创</div>
            <div class="time"><i class="iconfont icon-time"></i>{{item.createdAt | dateFilter}}</div>
        </aside>
        <div class="title">{{item.title}}</div>
        <p>
            {{item.summary}}
            <span @click="viewDetail( item.blogId )">阅读全文>></span>
        </p>
        <div class="bottom-aside" flex="dir:left">
            <div class="catalog">{{item.Catalog.catalogName}}</div>
            <div class="hit"><i class="iconfont icon-view"></i>{{item.hit}}</div>
            <div class="love"><i class="iconfont icon-love"></i>{{item.love}}</div>
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
        methods:{
            viewDetail:function(id){
                this.$router.push({path:'blog/'+id});
            }
        },
        filters:{
            dateFilter:function(val){
                var date = val.substring(0,10);
                return date;
            }
        }
    }
</script>
<style lang="less" scoped>
    .item{
        aside{
            .source{
                background-color: #ec6149;
                color: #fff;
                padding: 1px 3px;
                margin-right:5px;
            }
            .time{
                font-size: 14px;
                color: #999;
                .iconfont{
                    position:relative;
                    top:2px;
                }
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
            span{
                color:#ec6149;
                cursor:pointer;
            }
            span:hover{
                text-decoration: underline;
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
            .hit,.love{
                font-size: 12px;
                padding: 0 5px;
                color: #999;
                cursor: pointer;
                .iconfont{
                    position:relative;
                    top:2px;
                }
            }
        }
    }
</style>