<template>
  <div class="app">
    <slide-navigation></slide-navigation>
    <div class="content" :style="{'margin-left':show?slideWidth:'0px'}">
      <transition name="page-slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import SlideNavigation from "./components/SlideNavigation"
export default {
  name: 'app',
  data () {
    return {
      show:true,
      slideWidth:'200px',
      navigationItems:[
        {
          title:"主页",
          icon:"icon-index",
        },
        {
          title:"分类",
          icon:"icon-catalog",
        },
        {
          title:"标签",
          icon:"icon-label",
        }
      ],
      activePage:0,
    }
  },
  components:{
    SlideNavigation
  },
  mounted:function(){
    this.appShow()
  },
  methods:{
    appShow:function(){
      this.$router.replace("/blog/index");
    }
  }
}
</script>

<style>
  body,html{
    padding: 0px;
    margin: 0px;
    font-family: "Microsoft YaHei"
  }
  #app{
    margin: 0 auto;
  }
  .content{
    transition: margin 0.5s ease;
  }
  .page-slide-enter-active {
    transition: all .5s ease;
    margin-top:0;
    opacity: 1;
  }
  .page-slide-leave-active {
    transition: all 0s ease;
    display: none;
  }
  .page-slide-enter,.page-slide-leave-active{
    margin-top:-10vh;
    opacity: 0
  }
</style>
