<script setup>
import { telegramApp } from "../webApp.js";

defineProps({
	url: String,
	blank: Boolean
})

const handleLinkClick = (e) => {
	e.preventDefault();
	telegramApp.openLink(url, { try_instant_view : true })
}
</script>

<template>
	<a 
		:href="url" 
		:target="blank ? '_blank' : '_self'"
		@click="handleLinkClick(e)" 
		class="article-link">
		<slot></slot>
	</a>
</template>

<style scoped>
.article-link {
	color: var(--tg-theme-link-color, #007aff);
}
</style>