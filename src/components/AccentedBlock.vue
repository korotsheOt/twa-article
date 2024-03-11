<template>
	<div class="article-accented-block">
		<slot></slot>
	</div>
</template>

<style scoped>
.article-accented-block {
	padding: 40px;
	background-color: var(--tg-theme-header-bg-color, #1c1c1c);
	border-radius: 10px;
	width: fit-content;
}

@media (max-width: 768px) {
	.article-accented-block {
		padding: 10px 20px;
	}
}
</style>