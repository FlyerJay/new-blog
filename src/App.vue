<template>
	<div id="app" flex="dir:left box:first">
		<div class="webside-info" :style="{width:show?'200px':'0px'}">
			<div class="webside-container" flex="dir:top cross:center">
				<div class="brand-image"><img src="./assets/icon.jpg"></div>
				<p>雪依旧,毕业于重庆大学计算机系,前端程序猿,对互联网充满期待和热爱,喜欢看书爱coding,希望通过个人博客和更多热爱互联网的朋友相识。</p>
				<div class="navigator">
<<<<<<< HEAD
					<div class="item"v-for="(item, index) in navList" @click="changeIndex(index)" :class="{'active':index == showIndex}" flex="dir:left cross:center main:center">
=======
					<div class="item"v-for="(item, index) in navList" @click="changePage(index)" :class="{'active':index == showIndex}" flex="dir:left cross:center main:center">
>>>>>>> 164d86ec81d8ff3db2b4159c29137785467e26ad
						<span><i class="iconfont" :class="item.icon"></i> {{item.title}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="slide-button" @click="show = !show" :class="{'show-menu':show}">
			<div class="button-line"></div>
			<div class="button-line"></div>
		</div>
		<transition name="push">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		data ()	{
			return {
				show:true,
				navList:[
					{
						title:"主页",
						icon:"icon-index",
					},
					{
						title:"分类",
						icon:"icon-catalog",
					},
				],
				showIndex:0,
			}
		},
		methods:{
<<<<<<< HEAD
			changeIndex:function(index){
=======
			changePage:function(index){
>>>>>>> 164d86ec81d8ff3db2b4159c29137785467e26ad
				this.showIndex = index;
				switch(index){
					case 0:
						this.$router.push({path:'/'});
						break;
					case 1:
						break;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	#app {
		width:100%;
		height:100%;
		.webside-info{
			width:200px;
			background-color:#222;
			transition:all .3s ease;
			overflow:hidden;
			.webside-container{
				.brand-image{
					width:100px;
					height: 100px;
					border-radius: 100px;
					overflow:hidden;
					margin-top:50px;
					img{
						width:100%;
						height:100%;
					}
				}
				p{
					color:#ccc;
					font-size:12px;
					font-weight:normal;
					padding:10px 10px;
					text-indent:2em;
					line-height:1.5em;
					width:180px;
				}
				.navigator{
					width:100%;
					color:#ccc;
					.item{
						height:40px;
						cursor:pointer;
						white-space:nowrap;
						padding-left:5px;
					}
					.item.active{
						background-color:#000;
						border-left:5px solid #aaa;
						padding-left:0px;
					}
				}
			}
		}
		.slide-button{
			width:20px;
			height:20px;
			background-color:#fff;
			overflow:hidden;
			position:absolute;
			left:10px;
			transition:all .3s ease;
			border-radius:3px;
			bottom:10px;
			border:2px solid #222;
			cursor:pointer;
			.button-line{
				width:2px;
				height:18px;
				background-color:#222;
				position:absolute;
				bottom:1px;
				left:9px;
				transition:all .3s ease;
				transition-delay:.2s;
				border-radius:2px;
			}
			.button-line:nth-child(1){
				transform:rotate(90deg);
			}
			.button-line:nth-child(2){
				transform:rotate(0deg);
			}
		}
		.slide-button.show-menu{
			left:160px;
			background-color:#222;
			border:2px solid #eee;
			.button-line{
				background-color:#eee;
				height:20px;
				bottom:0px;
			}
			.button-line:nth-child(1){
				transform:rotate(135deg);
			}
			.button-line:nth-child(2){
				transform:rotate(-135deg);
			}
		}
	}
	.push-enter-active {
		transition: all .2s ease-in;
		transform: translate3d(0%,0,0);
		z-index:1001;
	}
	.push-leave-active {
		transition: all .2s ease-in;
		transform: translate3d(0%,0,0);
		z-index: 1000;
	}
	.push-leave{
		transform: translate3d(0%,0,0);
		z-index: 1000;
	}
	.push-enter{
		transform: translate3d(100%,0,0);
		z-index:1001;
	}
</style>
