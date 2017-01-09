<template>
	<div class="pagenation">
		<ul class="page-list">
			<li class="page-index" :class="{active:item == showPage}" @click="pageClick(item)" v-for="(item,index) in pageRange">
				{{item}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				showPage:this.$parent.page,
				pageRange:[],
				totalPage:0,
				pageSize:this.$parent.pageSize,
			}
		},
		methods:{
			updateRange:function(){
				var start;
				var end;
				if(this.totalPage <= this.pageSize){
					start = 1;
					end = (this.totalPage==0?1:this.totalPage);
				}else if(this.showPage >= this.totalPage - Math.floor(this.pageSize/2)){
					start = this.totalPage - this.pageSize;
					end = this.totalPage;
				}else{
					var temp = (this.showPage - Math.floor(this.pageSize/2)) <= 0 ?1:(this.showPage - Math.floor(this.pageSize/2));
					start = temp;
					end = temp + this.pageSize - 1;
				}
				this.pageRange = [];
				for(var i=start;i<=end;i++){
					this.pageRange.push(i);
				}
			},
			pageClick:function(item){
				this.showPage = item;
			}
		},
		watch:{
			"totalPage":function(val){
				this.updateRange();
			},
			"showPage":function(val){
				this.$parent.page = val;
				this.updateRange();
			}
		}
	}
</script>
<style scoped>
	.page-list{
		list-style: none;
		display: flex;
		flex-direction: row;
		padding: 0px 50px;
		margin: 50px 0px 100px 0px;
		justify-content: flex-start;
	}
	.page-list li{
		padding: 0px 10px;
		cursor: pointer;
		color: #aaa;
	}
	.page-list li.active{
		color: #222;
	}
</style>