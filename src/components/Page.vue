<template>
	<div class="pagenation">
		<ul class="page-list">
			<li class="page-index" v-for="(item,index) in pageRange">
				{{item.index}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
			}
		},
	}
</script>
<style>
	
</style>