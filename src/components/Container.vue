<script setup>
</script>

<template>
	<article class="article-container">
		<slot></slot>
	</article>
</template>

<style scoped>
.article-container {
	max-width: 960px;
	margin: 0 auto;
}

@media (max-width: 768px) {
	.article-container {
		margin: 0 15px;
	}
}
</style>