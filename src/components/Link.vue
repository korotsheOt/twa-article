<script setup>
defineProps({
	url: String,
	blank: Boolean
})
</script>

<template>
	<a 
		:href="url" 
		:target="blank ? '_blank' : '_self'" 
		class="article-link">
		<slot></slot>
	</a>
</template>

<style scoped>
.article-link {
	color: var(--tg-theme-link-color, #007aff);
}
</style>