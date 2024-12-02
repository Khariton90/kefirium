<template>
	<Preloader v-if="isLoading" />
	<div class="base-list" v-else-if="productData.length">
		<filters />
		<product-list :products="productData" />
	</div>
	<div class="base-list" v-else>
		<h2>Мы не нашли подходящих товаров</h2>
	</div>
</template>

<script setup lang="ts">
import { type Product } from '~/entities/product'
import { Filters } from '~/entities/filters'
import { ProductList } from '~/widgets/product-list'
import { ref, watch } from 'vue'
import { mockProductsByCategory } from '~/entities/category'
import { useMainStore } from '~/app/store'
import { wait } from '~/shared/lib/wait'
import { Preloader } from '~/widgets/preloader'

useSeoMeta({
	title: 'Kefirium | Каталог',
	ogTitle: 'Kefirium | Каталог',
	description: 'Каталог товаров Kefirium',
	ogDescription: 'Каталог товаров Kefirium',
})
const $store = useMainStore()
const productData: Ref<Product[] | []> = ref([])
const query = computed(() => $store.filter)
const isLoading = computed(() => $store.isLoading)

watch(query, async (newValue, oldValue) => {
	if (newValue !== oldValue) {
		await fetchData()
	}
})

async function fetchData() {
	$store.setIsLoading(true)
	await wait()
	productData.value = [...mockProductsByCategory(query.value)]
	$store.setIsLoading(false)
}

onMounted(() => {
	fetchData()
})
</script>

<style lang="scss">
.base-list {
	@include flex(column, center, center);
	gap: 40px;
	padding: 40px 0;
}

@media (min-width: $media-tablet) {
	.base-list {
		@include flex(row, space-between, flex-start);
	}
}
</style>
