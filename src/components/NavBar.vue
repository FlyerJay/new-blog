<template>
    <div class="nav-bar" flex="dir:left">
        <div class="left-button button" flex="dir:left cross:center" @click="goBack"><i class="iconfont icon-back"></i></div>
        <div class="title" flex="dir:left cross:center main:center">{{title}}</div>
        <div class="right-button button" flex="dir:left cross:center" @click="onExpand"><i class="iconfont icon-expand"></i></div>
    </div>
</template>
<script>
    export default{
        data () {
            return {

            }
        },
        props:{
            title:{
                type:String,
                default:''
            },
            onExpand:{
                type:Function,
                default:function(){
                    return ;
                }
            }
        },
        methods:{
            goBack:function(){
                this.$router.back();
            }
        }
    }
</script>
<style lang="less" scoped>
    .nav-bar{
        display:none;
        height:0px;
        .button{
        }
        .title{
        }
        @media screen and(max-width: 818px){
            height:40px;
            width:100%;
            background-color:#000;
            color:#fff;
            display:block;
            .button{
                width:20%;
                height:100%;
                &.left-button{
                    .iconfont{
                        padding-left:10px;
                    }
                }
                &.right-button{
                    text-align:right;
                    .iconfont{
                        width:100%;
                        padding-right:10px;
                    }
                }
                
            }
            .title{
                width:60%;
                height:100%;
                font-size:14px;
            }
        }
    }
</style>