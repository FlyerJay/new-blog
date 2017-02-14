<template>
	<div class="blog">
		<h2 class="title">{{blogInfo.title}}</h2>
		<aside>
			<span class="catalog">{{blogInfo.Catalog.catalogName}}</span>
			<span class="time">{{blogInfo.createdAt | dateFilter}} {{blogInfo.createdAt | timeFilter}}</span>
			<span class="read">阅读{{blogInfo.hit}}</span>
			<span class="love">喜欢{{blogInfo.love}}</span>
		</aside>
		<article v-html="blogInfo.article"></article>
	</div>
</template>
<script>
	import R from "../ajax"
	export default{
		data () {
			return {
				blogInfo:{
					Catalog:{
						catalogName:"",
					}
				},
			}
		},
		methods:{
			getBlog:function(){
				var self = this;
				var { id } = this.$route.params;
				R.getBlog(this,{id:id},function(res){
					self.blogInfo = res.data;
				})
			}
		},
		mounted:function(){
			this.getBlog();
		},
		filters:{
			dateFilter:function(val){
				return (val+'').substring(0,10);
			},
			timeFilter:function(val){
				return (val+'').substring(11,19);
			}
		}
	}
</script>
<style lang="less">
	.blog{
		max-width: 720px;
		margin: 0 auto;
		min-width: 320px;
		padding: 0 20px;
		min-height:600px;
		h2.title{
			line-height:2em;
			font-size:32px;
		}
		aside{
			font-size:12px;
			color:#888;
			cursor:pointer;
			.catalog{
				color:#ec6149;
				border-radius: 2px;
				border:1px solid #ec6149;
				padding: 2px 5px;
			}
		}
		article{
			blockquote{
				display: block;
				border-left: 8px solid #d0e5f2;
				padding: 5px 10px;
				margin: 10px 0;
				line-height: 1.4;
				font-size: 100%;
				background-color: #f1f1f1;
			}
			a{
				text-decoration: none;
				color:#4183c4;
				display:block;
			}
			a:hover{
				text-decoration: underline;
			}
			p{
				color:#333;
				line-height:2em;
			}
			img{
				max-width:100%;
			}
			ul{
				background-color:#f8f8f8;
				li{
					list-style:square;
					color:#333;
					font-size:14px;
					line-height:2em;
				}
			}
			pre{
				background-color:#f8f8f8;
				border:1px solid #ccc;
				border-radius:3px;
				li{
					color:#666;
					code{
						color:#666;
					}
				}
				li:nth-child(2n){
					background-color:#efefef;
				}
			}
		}
	}
</style>