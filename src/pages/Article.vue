<script setup>
import Container from "../components/Container.vue";
import Text from "../components/Text.vue";
import Image from "../components/Image.vue";
import List from "../components/List.vue";
import CustomTabs from "../components/Tabs/CustomTabs.vue";
import CustomTab from "../components/Tabs/CustomTab.vue";
import Carousel from "../components/Carousel.vue";
import Box from "../components/Box/Box.vue";
import BoxItem from "../components/Box/BoxItem.vue";
import Link from "../components/Link.vue";
import SocialLink from "../components/SocialLink.vue";
import AccentedBlock from "../components/AccentedBlock.vue";
import { Slide } from "vue3-carousel";
</script>

<template>
	<Container>
		<Text color="accent-text-color" tag="b"> Guides </Text>

		<Text tag="h1">
			A Beginner's Guide to Magic Eden: Navigating the NFT Marketplace
		</Text>
		<Text> Published: <Text tag="span">Mar 5, 2024</Text> </Text>
		<Text color="accent-text-color" tag="b">In Brief</Text>
		<Text>
			Explore the vibrant world of NFTs with this beginner's guide to Magic
			Eden, a leading Solana marketplace for

			<Text tag="b">
				<Text tag="i">creating, buying, and selling NFTs</Text>.
			</Text>
		</Text>

		<Image
			src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fstrapi-cdn.trustwallet.com%2Fmagic_eden_guide_da78bcbcd9.png&w=828&q=75"
			size="lg" />

		<Text tag="h2"> Accented Block example: </Text>

		<AccentedBlock>
			<Text>
				The emergence of the
				<Link url="https://trustwallet.com/solana-wallet">Solana blockchain</Link>
				provided NFT developers with an alternative blockchain to
				<Link url="https://trustwallet.com/ethereum-wallet">Ethereum</Link>, where they could mint NFTs
				faster and with lower gas fees. The growth
				of the NFT market on Solana NFTs led to the establishment of multiple
				NFT marketplaces like Magic Eden, which is currently the most popular
				NFT marketplace on the Solana blockchain.
			</Text>
			<Text>
				NFT marketplaces facilitate the creation, purchase, and sale of NFTs.
				Besides bridging the gap between buyers and sellers, NFT marketplaces
				also allow creators to list their NFTs, making them available for sale.
			</Text>
			<Text>
				This guide will delve into the Magic Eden NFT marketplace and how you
				can get started with the platform. Remember, if you are looking for a
				good
				<Link url="https://trustwallet.com/solana-wallet">Solana wallet</Link>, you can use Trust Wallet
				to buy, sell, manage, and stake your SOL
				tokens.
			</Text>
		</AccentedBlock>

		<Text tag="h2"> Tabs example: </Text>

		<CustomTabs>
			<CustomTab title="What Is Magic Eden?">
				<Text>
					<Text tag="b">
						Magic Eden is a leading multi-chain NFT marketplace supporting
						non-fungible tokens on Solana, Ethereum, Polygon, and Bitcoin.
						Currently, Magic Eden is the largest and best-known NFT marketplace
						on the Solana network, where it was originally launched.
					</Text>
				</Text>
				<Text>
					The platform enables users to create, buy, sell, and collect
					<Link url="https://trustwallet.com/nft">NFTs</Link>.
					Additionally, Magic Eden offers features such as developer resources,
					an NFT launchpad, and a non-custodial browser extension wallet.
				</Text>
				<Text>
					Magic Eden users enjoy low gas fees and fast processing time when
					trading Solana-based NFTs, which is what the Solana network is known
					for.
				</Text>
			</CustomTab>
			<CustomTab title="Getting Started with Magic Eden">
				<Text>
					To get started with Magic Eden, you’ll first need a Solana-compatible
					<Link url="https://trustwallet.com/blog/crypto-wallet">crypto wallet</Link>
					like Trust Wallet. You’ll also need to ensure you have enough SOL
					tokens in your Solana wallet to cover the gas fees on the Solana
					blockchain and pay for your NFT.
				</Text>
				<Text>
					Below is a step-by-step guide on connecting your Trust Wallet to Magic
					Eden.
				</Text>
			</CustomTab>
		</CustomTabs>

		<Text tag="h2"> Install Trust Wallet on Your Mobile Device </Text>

		<List tag="ul">
			<li>
				<Text>
					Go to
					<Link url="https://trustwallet.com/download">https://trustwallet.com/download</Link>
					to install Trust Wallet.
				</Text>
			</li>
			<li>
				<Text>
					Open the app and click on ‘Get Started’ to begin the setup process.
				</Text>
			</li>
		</List>

		<Text tag="h2"> Carousel example: </Text>

		<Carousel>
			<Slide :key="0">
				<Image
					src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fstrapi-cdn.trustwallet.com%2Fmagic_eden_guide_6_a02699a481.jpg&w=1920&q=75"
					size="md" caption="Image 1 caption example" />
			</Slide>
			<Slide :key="1">
				<Image
					src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fstrapi-cdn.trustwallet.com%2Fmagic_eden_guide_3_2d8630ce86.jpg&w=1200&q=75"
					size="md" caption="Image 2 caption example" />
			</Slide>
			<Slide :key="2">
				<Image
					src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fstrapi-cdn.trustwallet.com%2Fmagic_eden_guide_5_62a90995ab.jpg&w=1200&q=75"
					size="md" caption="Image 3 caption example" />
			</Slide>
		</Carousel>

		<Text tag="h2"> How to Connect Your Trust Wallet to Magic Eden </Text>
		<Text>
			Let’s look at how you can connect your Trust Wallet to Magic Eden.
		</Text>

		<List tag="ol">
			<li>
				<Text>
					Visit
					<Link url="https://magiceden.io/">https://magiceden.io/</Link>.
				</Text>
			</li>
			<li>
				<Text> Click on ‘Connect Wallet’ at the top right-hand corner. </Text>
			</li>
		</List>

		<Image
			src="https://trustwallet.com/_next/image?url=https%3A%2F%2Fstrapi-cdn.trustwallet.com%2Fmagic_eden_guide_9_28707b407e.jpg&w=1200&q=75"
			size="lg"
			caption="Long caption for image to show how it can be. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fugit porro non, odio voluptatem error nobis facilis incidunt nostrum eaque vel obcaecati sed deleniti aspernatur." />

		<Text tag="h2"> Conclusion </Text>
		<Text>
			If you want to create and sell your own
			<Link url="https://trustwallet.com/nft">NFTs on Solana</Link>, the
			Magic Eden NFT marketplace is an excellent place to start. However, to do
			this, you must have a compatible
			<Link url="https://trustwallet.com/solana-wallet">Solana wallet</Link>
			with enough SOL tokens to cover the gas fees and pay for the NFT you’ll
			create. Using the WalletConnect crypto bridge, you can connect to Magic
			Eden using Trust Wallet in a few simple steps, as described above.
		</Text>
		<Text>
			While Magic Eden stands out among Solana NFT marketplaces for its
			user-friendliness, it's crucial to always do your own research (DYOR) and
			further explore the platform if you're interested in diving into the NFT
			universe.
		</Text>
		<Text>
			<Link url="https://trustwallet.com/nft">NFTs</Link> have so much
			potential as they have created a way to authenticate and prove ownership
			of digital assets. In addition, they also empower digital creators and
			owners, allowing them to enjoy new revenue streams thanks to NFT
			marketplaces like Magic Eden that offer creators the needed guidance on
			how they can build their NFT projects, list them, and earn from them.
		</Text>

		<Text tag="b">
			Download Trust Wallet today and connect to Magic Eden to start your NFT
			journey.
		</Text>

		<Text tag="h2"> Share this article: </Text>

		<Box>
			<BoxItem>
				<SocialLink url="https://www.facebook.com/">
					<svg fill="var(--tg-theme-link-color, #007aff)" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 400 400">
						<path fill-rule="evenodd"
							d="M174.609 1.194C43.993 18.212-35.173 154.23 14.565 276.172c29.659 72.713 103.839 123.808 179.771 123.826l9.57.002V243.75h-42.968v-49.219h42.968l.005-21.679c.009-42.595 6.621-59.182 28.978-72.696 12.74-7.701 47.807-11.026 70.797-6.713l2.564.481v43.428l-17.773.329c-23.091.428-26.841 1.7-31.202 10.58l-2.197 4.473-.261 20.899-.262 20.898h49.78l-3.14 24.61-3.139 24.609h-43.368v149.135l4.101-1.205c91.177-26.774 151.75-120.118 140.101-215.899C385.512 65.783 284.196-13.085 174.609 1.194" />
					</svg>
				</SocialLink>
			</BoxItem>
			<BoxItem>
				<SocialLink url="https://www.facebook.com/">
					<svg fill="var(--tg-theme-link-color, #007aff)" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 400 400">
						<path fill-rule="evenodd"
							d="M174.609 1.194C8.75 22.804-59.514 227.069 60.256 343.37c112.899 109.628 302.556 52.438 335.731-101.238C424.984 107.814 310.724-16.541 174.609 1.194m77.432 85.558c36.725 3.204 57.685 24.135 61.295 61.207 1.616 16.59.522 106.471-1.398 114.977-5.652 25.026-21.538 41.965-44.981 47.961-18.781 4.803-114.847 4.821-133.914.025-26.678-6.71-43.163-27.356-46.307-57.995-1.076-10.482-1.076-95.372 0-105.854 3.376-32.899 20.926-52.976 51.818-59.279 10.786-2.201 91.694-2.944 113.487-1.042m-100.088 19.533c-30.248 2.066-43.433 15.532-45.713 46.689-.941 12.855-.941 81.197 0 94.052 2.377 32.483 15.046 44.531 49.229 46.815 16.611 1.11 93.55.483 100.73-.821 21.466-3.898 32.923-15.355 36.821-36.821 1.304-7.18 1.931-84.119.821-100.73-2.3-34.426-14.335-46.965-47.255-49.237-12.086-.834-82.214-.795-94.633.053m115.337 20.734c5.015 2.561 8.348 9.439 6.945 14.331-3.083 10.749-14.565 14.153-22.152 6.567-10.556-10.557 1.91-27.689 15.207-20.898m-51.274 16.759c43.209 13.36 56.662 65.637 25.031 97.269-36.87 36.869-99.228 11.074-99.228-41.047 0-38.658 37.964-67.425 74.197-56.222m-28.305 19.53c-33.616 10.933-34.902 59.559-1.923 72.77 10.939 4.382 27.599 2.125 37.287-5.053 23.883-17.694 18.807-56.265-8.823-67.042-6.523-2.544-19.759-2.881-26.541-.675" />
					</svg>
				</SocialLink>
			</BoxItem>
			<BoxItem>
				<SocialLink url="https://www.facebook.com/">
					<svg fill="var(--tg-theme-link-color, #007aff)" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 400 400">
						<path fill-rule="evenodd"
							d="M174.219 1.228C11.193 22.139-58.209 221.891 56.608 339.734c105.982 108.776 291.185 63.925 335.049-81.14C433.745 119.4 318.293-17.252 174.219 1.228m121.004 122.24c4.879 4.879 6.184-3.666-14.016 91.766-16.875 79.726-17.443 82.001-21.251 85.206-4.999 4.206-7.196 3.087-36.783-18.726-13.239-9.76-24.568-17.936-25.176-18.169-.693-.266-6.083 4.335-14.467 12.351-14.079 13.461-14.398 13.723-17.878 14.721-2.159.619-2.195.577-1.9-2.219.166-1.568.835-11.113 1.488-21.21.652-10.098 1.38-20.181 1.616-22.407l.43-4.048 46.826-42.301c46.231-41.764 48.967-44.522 45.32-45.679-2.539-.806-4.943.614-63.812 37.704l-57.114 35.985-19.839-6.213c-10.911-3.417-22.697-7.09-26.19-8.161-15.958-4.896-14.057-10.726 6.055-18.565 6.178-2.408 50.784-19.657 99.124-38.331 96.218-37.169 93.111-36.16 97.567-31.704" />
					</svg>
				</SocialLink>
			</BoxItem>
		</Box>
	</Container>
</template>
