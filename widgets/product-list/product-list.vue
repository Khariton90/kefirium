<template>
	<main class="main" v-if="!products.length && isLoading">
		Ничего не найдено
	</main>
	<main class="product-list" v-else>
		<product-card
			v-for="product of props.products"
			:key="product.id"
			:product="product"
			><ToggleFromCart :id="product.id"
		/></product-card>
	</main>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/app/store'
import { ProductCard, type Product } from '~/entities/product'
import { ToggleFromCart } from '~/features/product'

interface Props {
	products: Product[]
}

const props = defineProps<Props>()
const $store = useMainStore()
const isLoading = computed(() => $store.isLoading)
</script>

<style lang="scss">
.main {
	@include flex(row, center, center);
	height: 100%;
}

.product-list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
	gap: 20px;
}
</style>
