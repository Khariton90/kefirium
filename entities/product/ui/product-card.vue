<template>
	<article class="product-card">
		<NuxtLink class="link" :to="`/products/${product.id}`" />
		<figure class="product-image">
			<img
				:src="product.category.image"
				:alt="product.description"
				loading="lazy"
			/>
		</figure>
		<h2 class="product-name">{{ product.title }}</h2>
		<p class="product-category">{{ product.category.name }}</p>
		<p class="product-description">{{ product.description }}</p>
		<div class="product-pricing">
			<span class="new-price">Цена: {{ product.price }} ₽</span>
		</div>
		<slot />
	</article>
</template>

<script lang="ts" setup>
import type { Product } from '../model/types'

interface Props {
	product: Product
}
const { product } = defineProps<Props>()
</script>

<style lang="scss">
.product-card {
	@include flex(column);
	position: relative;
	padding: 10px;
	background-color: $color-white;
	border-radius: 5px;
	gap: 10px;
	transition: transform 0.3s ease-in-out;
	height: 460px;
	width: 300px;
	box-shadow: $box-shadow;
	text-align: center;
}

.product-card:hover {
	transform: scale(1.02);
	box-shadow: $box-shadow;
}

.link::after {
	content: '';
	position: absolute;
	inset: 0;
	z-index: 1;
}

.product-image {
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	& img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 5px;
	}
}

.product-name {
	font-size: 1rem;
	font-weight: 600;
	margin-bottom: 5px;
}

.product-category {
	font-weight: 600;
	color: $color-base;
}

.product-description {
	font-size: 0.8rem;
	line-height: 1.5;
	color: $color-black;
}

.product-pricing {
	@include flex(row, flex-end, center);
	margin-top: auto;
}

.new-price {
	font-weight: 600;
	color: $color-base;
}
</style>
