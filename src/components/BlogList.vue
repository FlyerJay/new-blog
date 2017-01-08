<template>
	<div class="blog-list">
		<div class="blog-general" v-for="(item,inde) in bloglist">
			<div class="blog-aside">
				<span class="description">原创</span>
				<span class="time"><i class="iconfont icon-time"></i>{{item.time}}</span>
			</div>
			<div class="blog-title">{{item.title}}</div>
			<p>{{item.summary}}...<span class="view-blog">阅读全文>></span></p>
			<aside>
				<span class="tags">前端开发</span>
				<span class="hit"><i class="iconfont icon-view"></i>{{item.hit}}</span>
				<span class="comment"><i class="iconfont icon-comment"></i>0</span>
				<span class="like"><i class="iconfont icon-like"></i>0</span>
			</aside>
		</div>
	</div>
</template>
<script>
	import R from "../ajax"
	export default{
		data () {
			return {
				bloglist:[]
			}
		},
		created:function(){
			var self = this;
			R.getBlogList(this,{page:1,pageSize:10},function(res){
				self.bloglist = res.bloglist
			})
		},
		mounted:function(){
		}
	}
</script>
<style scoped lang="less">
	@import "../style/iconfont";
	.blog-list{
		max-width: 640px;
		margin: 0 auto;
		min-width: 320px;
		padding: 0 20px;
	}
	.description{
		background-color: #ec6149;
		color: #fff;
		padding: 1px 3px;
	}
	.time{
		font-size: 14px;
		color: #999;
	}
	.blog-general{
		padding: 20px 0px;
		border-bottom: 1px solid #e0e0e0;
	}
	.blog-title{
		font-size: 18px;
		font-weight: bold;
		line-height: 2em;
	}
	.view-blog{
		color:#0066cc;
		cursor: pointer;
	}
	.view-blog:hover{
		text-decoration: underline;
	}
	.blog-general p{
		font-size: 14px;
		line-height: 2em;
	}
	.blog-general .tags{
		color:#ec6149;
		border-radius: 2px;
		border:1px solid #ec6149;
		padding: 2px 5px;
	}
	aside i.iconfont{
		font-size: 12px;
		position: relative;
		left:-2px;
	}
	aside span{
		font-size: 12px;
		padding: 0px 5px;
		color: #999;
		cursor: pointer;
	}
	aside span:hover{
		color: #222;
	}
	
</style>