<template>
	<div class="index-page">
		<div class="page-banner">
			<div class="banner-image"></div>
		</div>
		<blog-list></blog-list>
		<div class="footer">
			<span>@COPYRIGHT BY：FlyerJay | github：<a href="https://github.com/FlyerJay">https://github.com/FlyerJay</a></span>
		</div>
	</div>
</template>
<script>
	import BlogList from "../components/BlogList"
	export default {
		data () {
			return {

			}
		},
		components:{
			BlogList
		},
		watch:{
			
		}
	}
</script>
<style scoped>
	.page-banner{
		position: relative;
	}
	.page-banner h1{
		color: #fff;
		position: absolute;
		left: 10px;
		bottom: 10px;
		font-size: 32px;
	}
	.banner-image{
		width: 100%;
		height: 15vw;
		background-image: url("../assets/index.jpg");
		background-size: cover;
		background-position: center;
		filter: blur(1px);
	}
	.footer{
		margin: 0 auto;
		text-align: center;
		background: #222;
		padding: 20px 0px;
	}
	.footer span {
		color: #fff;
		font-size: 14px;
	}
</style>