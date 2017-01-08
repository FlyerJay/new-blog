import config from "./config"
const R = {};
R.url = "/blog";
R.getBlogList = function(vue,params,callback){
	this.url = "/blog/getbloglist"
	vue.$http.get(config.server+this.url,{
		params:params,
	}).then(res=>{
		callback(res.body)
	})
}
export default R;