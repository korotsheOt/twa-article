<script setup>
defineProps({
	width: String
})
</script>

<template>
	<div class="article-box_item">
		<slot></slot>
	</div>
</template>

<style scoped>
.article-box_item {
	width: v-bind(width);
}

@media (max-width: 768px) {
	.article-box_item {
		width: 100%;
	}
}
</style>