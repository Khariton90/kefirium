<template>
	<Preloader v-if="isLoading" />
	<main class="products" v-else>
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
import { wait } from '~/shared/lib/wait'
import { Preloader } from '~/widgets/preloader'

const route = useRoute()
const $store = useMainStore()
const isLoading = computed(() => $store.isLoading)
const product: Ref<Product | null> = ref(null)
const id = route.params.id.toString() ?? ''

async function fetchData() {
	$store.setIsLoading(true)
	await wait()
	product.value = mockProductDetailsDto(id)
	$store.setIsLoading(false)
}

onMounted(() => {
	fetchData()
})
</script>

<style lang="scss">
.products {
	@include flex(row, center, center);
	height: 100%;
}
</style>
