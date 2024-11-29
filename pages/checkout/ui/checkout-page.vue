<template>
	<div class="shopping-cart" v-if="isLoading">Загрузка...</div>
	<div class="shopping-cart" v-else-if="!items.length">
		<h2>Корзина пуста</h2>
		<NuxtLink to="/">Вернуться в каталог</NuxtLink>
	</div>

	<div class="shopping-cart" v-else>
		<product-list :products="productData" />
	</div>
</template>

<script lang="ts" setup>
import { ProductList } from '~/widgets/product-list'
import { ref, onMounted, watch } from 'vue'
import { type Product } from '~/entities/product'
import { useMainStore } from '~/app/store'
import { mockCartDto } from '~/entities/cart'

const TIME_OUT = 200
const productData: Ref<Product[] | []> = ref([])
const requestStatus = ref<'idle' | 'pending' | 'fulfilled' | 'rejected'>('idle')
const $store = useMainStore()
const items = computed(() => $store.itemsMap)
const isLoading = computed(() => $store.isLoading)

watch(items, async (newValue, oldValue) => {
	if (newValue !== oldValue) {
		await fetchData()
	}
})

//Имитация запроса
async function fetchData() {
	try {
	} catch (error) {
	} finally {
		$store.setIsLoading(false)
		productData.value = [...mockCartDto($store.itemsMap)]
		requestStatus.value = 'fulfilled'
	}
}
onMounted(() => {
	$store.setIsLoading(true)

	setTimeout(() => {
		fetchData()
	}, TIME_OUT)
})
</script>

<style lang="scss">
.shopping-cart {
	@include flex(column, center, center);
	gap: 20px;
	height: 100%;
}
</style>
