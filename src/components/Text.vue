<script setup>
defineProps({
	tag: String,
	color: String,
})
</script>

<template>
	<component :is="tag ? tag : 'p'" :style="color ? 'color: var(--tg-theme-' + color + ')' : 'color: inherit'">
		<slot></slot>
	</component>
</template>