<script setup>
import Link from './Link.vue';
import Image from './Image.vue';

defineProps({
	url: String,
	iconUrl: String
})
</script>

<template>
	<div class="article-social_link">
		<Link :url="url">
			<slot></slot>
		</Link>
	</div>
</template>

<style scoped>
.article-social_link {
	width: 30px;
	height: 30px;
}
</style>