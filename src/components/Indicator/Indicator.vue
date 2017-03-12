<template>
    <transition>
        <div class="snowblog-indicator" v-show="visible">
            <div class="snowblog-indicator-mask"></div>
            <div class="snowblog-indicator-animate" >
                <div class="snowblog-indicator-content">
                    <span class="cont-1">SNOW BLOG</span>
                    <span class="cont-2" :class="{'repeate':repeate}">SNOW BLOG</span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data () {
            return {
                visible:false,
                repeate:true,
            }
        }
    }
</script>
<style lang="less" scoped>
    .snowblog-indicator{
        position:absolute;
        z-index:1;
        left:0;
        right:0;
        top:0;
        bottom:0;
        .snowblog-indicator-mask{
            width:100%;
            height:100%;
            background-color:#5cadff;
        }
        .snowblog-indicator-animate{
            position:absolute;
            width:250px;
            height:100px;
            text-align:center;
            top:50%;
            left:50%;
            transform:translate3d(-50%,-50%,0);
            .snowblog-indicator-content{
                color:#fff;
                font-size:48px;
                position:relative;
                span{
                    position:absolute;
                    overflow:hidden;
                    white-space:nowrap;
                    font-family:'Brush Script MT';
                    left:0;
                    top:0;
                }
                .cont-1{
                    color:#5cadff;
                    width:100%;
                }
                .cont-2{
                    color:#fff;
                    width:100%;
                }
                .cont-2.repeate{
                    animation:repeate ease 2s infinite;
                }
            }
        }
        @keyframes repeate{
            0%{
                width:0%;
                color:#5cadff;
            };
            100%{
                width:100%;
                color:#fff;
            }
        }
    }
</style>