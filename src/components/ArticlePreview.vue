<script setup>
const props = defineProps({
	title: String,
	description: String,
	image: String,
	tags: []
})

</script>

<template>
	<div class="article-preview">
		<div class="article-preview_image-block">
			<img :src="image" alt="Article image">
		</div>
		<div>
			<p class="article-preview_title">{{ title }}</p>
			<p class="article-preview_description">{{ description }}</p>

			<ul class="article-preview_tags">
				<li v-for="tag in tags">
					<span class="article-preview_tag">{{ tag }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.article-preview {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	gap: 25px;
	width: 100%;
}

.article-preview_image-block {
	max-width: 35%;
}

.article-preview_image-block img {
	width: 100%;
	object-fit: cover;
	border-radius: 10px;
}

.article-preview_title {
	font-size: 20px;
	font-weight: 600;
	margin: 5px 0;
}

.article-preview_tags {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: row;
	gap: 10px;
}

.article-preview_tag {
	padding: 6px 12px;
    background-color: var(--tg-theme-bg-color, #282828);
    border-radius: 15px;
}

@media screen and (max-width: 768px) {
	.article-preview {
		flex-direction: column;
	}

	.article-preview_image-block {
		max-width: 100%;
	}
}
</style>