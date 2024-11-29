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
import { mockProductsByCategory } from '~/entities/category'
import { useMainStore } from '~/app/store'
import { type Product } from '~/entities/product'

const productData: Ref<Product[] | []> = ref([])
const $store = useMainStore()
const query = computed(() => $store.filter)
const isLoading = computed(() => $store.isLoading)

watch(query, async (newValue, oldValue) => {
	if (newValue !== oldValue) {
		await fetchData()
	}
})

async function fetchData() {
	try {
	} catch (error) {
	} finally {
		productData.value = [...mockProductsByCategory(query.value)]
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
