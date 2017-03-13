<template>
    <transition>
        <div class="snowblog-indicator" v-show="visible">
            <div class="snowblog-indicator-mask"></div>
            <div class="snowblog-indicator-animate" >
                <div class="snowblog-indicator-content">
                    <img src="../../assets/icon.png" alt="">
                    <div class="content-mask"></div>
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
            width:200px;
            height:100px;
            text-align:center;
            top:50%;
            left:50%;
            transform:translate3d(-50%,-50%,0);
            .snowblog-indicator-content{
                color:#fff;
                font-size:48px;
                position:relative;
                height:100%;
                overflow:hidden;
                img{
                    width:100%;
                    height:100%;
                    position:absolute;
                    left:0;
                    top:0;
                    bottom:0;
                    animation:fade 1.5s ease infinite;
                }
                .content-mask{
                    position:absolute;
                    right:0;
                    top:0;
                    bottom:0;
                    animation:repeate 1.5s ease infinite;
                    background-color:#5cadff;
                }
            }
        }
        @keyframes repeate{
            0%{
                width:100%;
            };
            100%{
                width:0%;
            }
        }
        @keyframes fade{
            0%{
                opacity:1;
            };
            100%{
                opacity:0;
            }
        }
    }
</style>