<script setup>
import { telegramApp } from "./webApp.js";
import { router } from "./router.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

const routerInstance = useRouter();
const backButton = telegramApp.BackButton;
const isBlog = ref(true);

routerInstance.afterEach((to, from) => {
	if (to.fullPath.indexOf("blog") !== -1) {
		isBlog.value = false;
		backButton.show();
	} else {
		isBlog.value = true;
		backButton.hide();
	}
});

backButton.onClick(() => {
	router.go(-1);
});
</script>

<template>
	<router-link 
		v-if="isBlog" 
		to="/blog" 
		class="router-link">
			Go to blog
	</router-link>
	<router-view></router-view>
</template>

<style scoped>
.router-link {
	color: var(--tg-theme-button-text-color, #ffffff);
	background-color: var(--tg-theme-button-color, #007aff);
	padding: 15px 30px;
	border-radius: 10px;
	text-decoration: none;
	display: flex;
	width: fit-content;
	margin: 20px auto;
}
</style>