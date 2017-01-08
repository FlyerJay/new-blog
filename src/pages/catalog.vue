<template>
	<div class="catalog-page">
		<div class="page-banner">
			<div class="banner-image"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
			}
		},
		components:{
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
		background-image: url("../assets/catalog.jpg");
		background-size: cover;
		background-position: center;
		filter: blur(1px);
	}
</style>