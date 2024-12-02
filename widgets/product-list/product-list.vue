<template>
	<main class="product-list">
		<product-card
			v-for="product of props.products"
			:key="product.id"
			:product="product"
			><ToggleFromCart :id="product.id"
		/></product-card>
	</main>
</template>

<script lang="ts" setup>
import { ProductCard, type Product } from '~/entities/product'
import { ToggleFromCart } from '~/features/product'

interface Props {
	products: Product[]
}

const props = defineProps<Props>()
</script>

<style lang="scss">
.product-list {
	@include flex(row, center, center);
	flex-wrap: wrap;
	gap: 40px 20px;
	height: 100%;
}

@media (min-width: $media-tablet) {
	.product-list {
		@include flex(row, flex-start, center);
	}
}
</style>
