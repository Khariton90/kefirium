<template>
	<main class="products">
		<product-card v-if="product" :key="product.id" :product="product"
			><ToggleFromCart :id="product.id"
		/></product-card>
	</main>
</template>

<script setup lang="ts">
import { useMainStore } from '~/app/store'
import { ProductCard, type Product } from '~/entities/product'
import { mockProductDetailsDto } from '~/entities/product'
import { ToggleFromCart } from '~/features/product'
import { TIMEOUT_REQUEST } from '~/shared/model/contants'

const route = useRoute()
const $store = useMainStore()
const product: Ref<Product | null> = ref(null)
const id = route.params.id.toString() ?? ''

async function fetchData() {
	// Fake fetch request
	product.value = mockProductDetailsDto(id)
	$store.setIsLoading(false)
}

onMounted(() => {
	$store.setIsLoading(true)
	setTimeout(() => fetchData(), TIMEOUT_REQUEST)
})
</script>

<style lang="scss">
.products {
	@include flex(row, center, center);
	height: 100%;
}
</style>
