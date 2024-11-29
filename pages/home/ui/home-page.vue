<template>
	<div class="base-list" v-if="isLoading">Загрузка...</div>
	<div v-else class="base-list">
		<filters />
		<product-list :products="productData" />
	</div>
</template>

<script setup lang="ts">
import { Filters } from '~/entities/filters'
import { ProductList } from '~/widgets/product-list'
import { ref, onMounted, watch } from 'vue'
import { type Product } from '~/entities/product'
import { mockProductsByCategory } from '~/entities/category/api/__mock__/mock-products-by-category'
import { useMainStore } from '~/app/store'

const productData: Ref<Product[] | []> = ref([])
const requestStatus = ref<'idle' | 'pending' | 'fulfilled' | 'rejected'>('idle')
const $store = useMainStore()
const query = computed(() => $store.filter)
const isLoading = computed(() => $store.isLoading)

watch(query, async (newValue, oldValue) => {
	if (newValue !== oldValue) {
		await fetchData()
	}
})

//Имитация запроса к серверу
async function fetchData() {
	try {
		requestStatus.value = 'pending'
	} catch (error) {
		requestStatus.value = 'rejected'
	} finally {
		productData.value = [...mockProductsByCategory(query.value)]
		requestStatus.value = 'fulfilled'
		$store.setIsLoading(false)
	}
}

onMounted(() => {
	$store.setIsLoading(true)
	setTimeout(() => {
		fetchData()
	})
})
</script>

<style lang="scss">
.base-list {
	@include flex(row, space-between, flex-start);
	column-gap: 40px;
}
</style>
