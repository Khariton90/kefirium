<template>
	<div class="preloader" v-if="isLoading">Загрузка...</div>
	<div v-else-if="productData.length" class="base-list">
		<filters />
		<product-list :products="productData" />
	</div>
</template>

<script setup lang="ts">
import { type Product } from '~/entities/product'
import { Filters } from '~/entities/filters'
import { ProductList } from '~/widgets/product-list'
import { ref, onMounted, watch } from 'vue'
import { mockProductsByCategory } from '~/entities/category'
import { useMainStore } from '~/app/store'
import { TIMEOUT_REQUEST } from '~/shared/model/contants'

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
	// Fake fetch request
	productData.value = [...mockProductsByCategory(query.value)]
	$store.setIsLoading(false)
}

onMounted(() => {
	$store.setIsLoading(true)
	setTimeout(() => {
		fetchData()
	}, TIMEOUT_REQUEST)
})
</script>

<style lang="scss">
.preloader {
	@include flex(row, center, center);
	height: 100%;
}

.base-list {
	@include flex(column, center, center);
	column-gap: 20px;
	padding: 40px 0;
}

@media (min-width: $media-tablet) {
	.base-list {
		@include flex(row, space-between, flex-start);
		column-gap: 40px;
	}
}
</style>
