<template>
	<Preloader v-if="isLoading" />
	<div class="shopping-cart" v-else-if="!productData.length">
		<h2>Корзина пуста</h2>
		<NuxtLink to="/">Вернуться в каталог</NuxtLink>
	</div>
	<product-list v-else :products="productData" />
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { type Product } from '~/entities/product'
import { ProductList } from '~/widgets/product-list'
import { useMainStore } from '~/app/store'
import { mockCartDto } from '~/entities/cart'
import { wait } from '~/shared/lib/wait'
import { Preloader } from '~/widgets/preloader'

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
	$store.setIsLoading(true)
	await wait()
	productData.value = [...mockCartDto($store.itemsMap)]
	$store.setIsLoading(false)
}

onMounted(() => {
	fetchData()
})
</script>

<style lang="scss">
.shopping-cart {
	@include flex(column, center, center);
	gap: 20px;
	height: 100%;
	padding: 40px 0;
}
</style>
