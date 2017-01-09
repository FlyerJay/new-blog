import App from "../App"
export default [
	{
		path:"/",
		component:App,
		children:[
			{
				path:"/index",
				component:resolve => require(["../pages/index"],resolve)
			},
			{
				path:"/catalog",
				component:resolve => require(["../pages/catalog"],resolve)
			},
			{
				path:"/blog/:id",
				component:resolve => require(["../pages/blog"],resolve)
			},
		]
	}
] 