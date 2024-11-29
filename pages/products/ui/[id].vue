<template>
	<main class="products">
		<div v-if="!product?.id"></div>
		<article v-else class="product-card">
			<NuxtLink class="link" :to="`/products/${product.id}`"></NuxtLink>

			<figure class="product-image">
				<img
					:src="product.category.image"
					alt="Описание изображения товара"
					loading="lazy"
				/>
			</figure>
			<h2 class="product-name">{{ product.title }}</h2>
			<p class="product-category">{{ product.category.name }}</p>
			<p class="product-description">{{ product.description }}</p>
			<div class="product-pricing">
				<span class="new-price">Новая цена: {{ product.price }} ₽</span>
			</div>

			<slot />
		</article>
	</main>
</template>

<script lang="ts" setup>
import { type Product } from '~/entities/product'
import { mockProductDetailsDto } from '~/entities/product/api/__mocks__/mock-product-details'
const route = useRoute()
const product: Ref<Product | null> = ref(null)
const requestStatus = ref<'idle' | 'pending' | 'fulfilled' | 'rejected'>('idle')

const id = typeof route.params.id === 'string' ? route.params.id : ''

async function fetchData() {
	try {
		requestStatus.value = 'pending'
	} catch (error) {
		requestStatus.value = 'rejected'
	} finally {
		product.value = mockProductDetailsDto(id)
		requestStatus.value = 'fulfilled'
	}
}

fetchData()
</script>

<style lang="scss">
.products {
	@include flex(row, center, center);
	height: 100%;
}

.product-card {
	max-width: 300px;
	margin: 20px auto;
	padding: 10px;
	border: 1px solid $color-green;
	box-shadow: $box-shadow;
	text-align: center;
}
.product-image img {
	width: 100%;
	height: auto;
}
.product-title {
	font-size: 18px;
	font-weight: bold;
	margin-top: 10px;
}
.product-price {
	color: $color-black;
	font-size: 16px;
	margin-bottom: 10px;
}
</style>
