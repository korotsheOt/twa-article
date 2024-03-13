import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Blog from "./pages/Blog.vue";
import Article from "./pages/Article.vue";

const routes = [
	{
		path: "/",
		name: "App",
		component: App,
	},
	{
		path: "/blog",
		name: "Blog",
		component: Blog,
	},
	{
		path: "/blog/article/:id",
		name: "Article",
		component: Article,
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
