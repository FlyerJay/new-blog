<template>
	<div class="slide-navigation">
		<transition name="slide-animation">
			<div class="slide-content" :style="{'width':width}" v-show="show">
				<div class="navigation-container">
					<div class="brand-image"><img src="../assets/icon.jpg" alt=""></div>
					<p>雪依旧,毕业于重庆大学计算机系,前端程序猿,对互联网充满期待和热爱,喜欢看书爱coding,希望通过个人博客和更多热爱互联网的朋友相识。</p>
					<div class="navigation-item" @click="active=index" :class="{'active':active==index}" v-for="(item,index) in items">
						<span><i class="iconfont" :class="item.icon"></i> {{item.title}}</span>
					</div>
				</div>
			</div>
		</transition>
		<div class="slide-bar iconfont" :class="{'icon-close':show,'icon-expand':!show}" @click="toggleSlide"></div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				show:this.$parent.show,
				width:this.$parent.slideWidth,
				items:this.$parent.navigationItems,
				active:this.$parent.activePage
			}
		},
		methods:{
			toggleSlide:function(){
				if(this.show){
					this.show = false
				}else{
					this.show = true
				}
			}
		},
		watch:{
			"show":function(val){
				this.$parent.show = val;
			},
			"active":function(val){
				this.$parent.activePage = val;
			}
		}
	}
</script>
<style scoped lang="less">
	@import "../style/iconfont";
	.slide-content{
		position:fixed;
		top: 0;
		bottom: 0;
		left: 0;
		background-color: #222;
		z-index: 1000;
	}
	.iconfont{
		line-height: 22px;
		text-align: center;
		cursor: pointer;
	}
	.slide-bar.icon-expand{
		background-color: transparent;
		color: #222;
	}
	.slide-bar{
		position: fixed;
		bottom: 50px;
		left: 50px;
		width: 22px;
		height: 22px;
		background-color:transparent;
		z-index: 1001;
		color: #fff;
	}
	.navigation-container{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.navigation-container p{
		color:#ddd;
		font-size: 12px;
		text-indent: 2em;
		padding: 0 10px;
		margin-bottom:50px;
	}
	.navigation-item.active{
		background-color: #111;
	}
	.navigation-item{
		color: #ccc;
		padding:10px 0px;
		width: 100%;
		text-align: center;
		cursor: pointer;
	}
	.brand-image img{
		width:100px;
		height: 100px;
		border-radius: 100px;
	}
	.brand-image{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
	}
	.slide-animation-enter-active {
	  	transition: all .5s ease;
	}
	.slide-animation-leave-active {
	  	transition: all .5s ease;
	}
	.slide-animation-enter,.slide-animation-leave-active{
	  	transform: translateX(-100vw);
	}
</style>