<template>
	<div class="article-box">
		<slot></slot>
	</div>
</template>

<style scoped>
.article-box {
	display: flex;
	justify-content: space-between;
	gap: 40px;
	width: fit-content;
}

@media (max-width: 768px) {
	.article-box {
		gap: 20px;
	}
}
</style>