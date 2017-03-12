<template>
    <transition>
        <div class="snowblog-indicator" v-show="visible">
            <div class="snowblog-indicator-mask"></div>
            <div class="snowblog-indicator-animate" :class="{'repeate':repeate}">
                <div class="snowblog-indicator-icon">
                    雪依旧
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
            background-color:#afafaf;
        }
        .snowblog-indicator-animate{
            position:absolute;
            width:200px;
            height:100px;
            background-image:-webkit-linear-gradient(-180deg, #fff 100%, #000 10px);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            top:50%;
            left:50%;
            transform:translate3d(-50%,-50%,0);
            .snowblog-indicator-icon{
                color:#fff;
                font-size:48px;
            }
        }
        @keyframes repeate{
            0%{
                background-image:-webkit-linear-gradient(-180deg, #fff 100%, #000 10px);
            };
            25%{
                background-image:-webkit-linear-gradient(-180deg, #fff 50%, #000 10px);
            };
            50%{
                background-image:-webkit-linear-gradient(-180deg, #fff 0%, #000 10px);
            }  
            75%{
                background-image:-webkit-linear-gradient(-180deg, #fff 50%, #000 10px);
            }; 
            100%{
                background-image:-webkit-linear-gradient(-180deg, #fff 100%, #000 10px);
            }
        }
        .snowblog-indicator-animate.repeate{
            animation:repeate ease .5s infinite;
            transition:all .1s ease;
        }
    }
</style>