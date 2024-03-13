<script setup>
import Container from "../components/Container.vue";
import ArticlePreview from "../components/ArticlePreview.vue";
import Link from "../components/Link.vue";
</script>

<template>
	<Container>
		<ul class="news-list">
			<li>
				<!-- Nested article -->
				<router-link to="/blog/article/1">
					<ArticlePreview 
						title="A Beginner's Guide to Magic Eden: Navigating the NFT Marketplace"
						description="Explore the vibrant world of NFTs with this beginner's guide to Magic Eden, a leading Solana marketplace for"
						image="https://trustwallet.com/_next/image?url=https%3A%2F%2Fstrapi-cdn.trustwallet.com%2Fmagic_eden_guide_da78bcbcd9.png&w=828&q=75" 
						:tags="['guide', 'NFT', 'Solana']"/>
				</router-link>
			</li>
			<li>
				<!-- External article -->
				<Link url="https://coinmarketcap.com/community/en/articles/65f193f2a14c5d1222732d14">
					<ArticlePreview 
						title="$1 Billion inflows in one day, Spot Bitcoin ETFs sets new record"
						description="The newly launched spot Bitcoin Exchange-Traded Fund (ETF) just knocked off another major milestone with BTC’s ongoing bull run. The latest data s..."
						image="https://news.todayq.com/wp-content/uploads/2024/03/Untitled-design-448.jpg"
						:tags="['Bitcoin', 'ETF']" />
				</Link>
			</li>
		</ul>
	</Container>
</template>

<style scoped>
.news-list {
	padding: 0;
	margin-top: 15px;
}

.news-list > li {
	list-style: none;
	padding: 30px;
	background-color: var(--tg-theme-header-bg-color, #1c1c1c);
	border-radius: 10px;
	margin-bottom: 20px;
}

.news-list > li a {
	color: inherit;
	text-decoration: none;
}
</style>