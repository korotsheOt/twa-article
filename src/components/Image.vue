<script setup>
defineProps({
	src: String,
	size: String,
	caption: String
});
</script>

<template>
	<figure :class="'article-image_figure article-image_figure--' + size" >
		<img class="article-image" :data-src="src" :src="src" />	
		<figcaption class="article-image_caption" v-if="caption">{{ caption }}</figcaption>
	</figure>
</template>

<style scoped>
.article-image_figure {
	margin: 40px 0;
}

.article-image_figure--lg {
	width: 100%;
}

.article-image_figure--md {
	width: 50%;
}

.article-image_figure--sm {
	width: 30%;
}

.article-image {
	border-radius: 20px;
	width: 100%;
}

.article-image_caption {
	margin-top: 10px;
	color: var(--tg-theme-hint-color, #999999);
	padding: 5px 0 5px 15px;
    border-left: 2px solid;
}

@media (max-width: 768px) {
	.article-image_figure--md, 
	.article-image_figure--sm {
		width: 100%;
	}

	figure {
		margin: 15px 0;
	}
}

</style>
