<script setup>
defineProps({
	tag: String
})
</script>

<template>
	<component :is="tag" class="article-list">
		<slot></slot>
	</component>
</template>

<style scoped>
.article-list {
	padding-left: 20px;
}
</style>