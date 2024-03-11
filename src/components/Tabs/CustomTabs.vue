<script setup>
import { Tabs } from 'vue3-tabs-component';
import "../../styles/tabs.css";
</script>

<template>
	<Tabs 
		:options="{ useUrlFragment: false }" 
		nav-class="article-tabs"
		nav-item-class="article-tabs_item"
		nav-item-link-class="article-tabs_link"
		panels-wrapper-class="article-tabs_panels">
		<slot></slot>
	</Tabs>
</template>