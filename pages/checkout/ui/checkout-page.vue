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
import { ref, onMounted, watch } from 'vue'
import { type Product } from '~/entities/product'
import { ProductList } from '~/widgets/product-list'
import { useMainStore } from '~/app/store'
import { mockCartDto } from '~/entities/cart'
import { TIMEOUT_REQUEST } from '~/shared/model/contants'

useSeoMeta({
	title: 'Kefirium | Корзина',
	ogTitle: 'Kefirium | Корзина',
	description: 'Корзина Kefirium',
	ogDescription: 'Корзина Kefirium',
})

const productData: Ref<Product[] | []> = ref([])
const $store = useMainStore()
const items = computed(() => $store.itemsMap)
const isLoading = computed(() => $store.isLoading)

watch(items, (newValue, oldValue) => {
	if (newValue !== oldValue) {
		fetchData()
	}
})

async function fetchData() {
	// Fake fetch request
	productData.value = [...mockCartDto($store.itemsMap)]
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
.shopping-cart {
	@include flex(column, center, center);
	gap: 20px;
	height: 100%;
}
</style>
