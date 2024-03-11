<script setup>
import { Carousel, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
import '../styles/carousel.css';
</script>

<template>
	<Carousel 
		:items-to-show="1">
		<slot></slot>

		<template #addons>
			<Navigation />
		</template>
	</Carousel>
</template>