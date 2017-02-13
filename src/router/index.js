import App from "../App"
export default [
	{
		path:"/",
		component:App,
		children:[
			{
				path:"blog",
				component:App,
			},
			{
				path:"blog/index",
				component:resolve => require(["../pages/index"],resolve)
			},
			{
				path:"blog/catalog",
				component:resolve => require(["../pages/catalog"],resolve)
			},
			{
				path:"blog/blog/:id",
				component:resolve => require(["../pages/blog"],resolve)
			},
		]
	}
] 