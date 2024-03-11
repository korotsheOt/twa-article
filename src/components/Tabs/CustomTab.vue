<script setup>
import { Tab } from 'vue3-tabs-component';

defineProps({
	title: String,
});
</script>

<template>
	<div>
		<Tab :name="title">
			<slot></slot>
		</Tab>
	</div>
</template>
