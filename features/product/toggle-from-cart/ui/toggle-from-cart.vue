<template>
	<button
		v-if="!isChecked"
		class="add-to-cart"
		@click="addToCartItem(props.id)"
		aria-label="Добавить товар в корзину"
	>
		Добавить в корзину
	</button>
	<button
		v-else
		@click="removeFromCart(props.id)"
		class="add-to-cart"
		aria-label="Добавить товар в корзину"
	>
		Удалить из корзины
	</button>
</template>

<script setup lang="ts">
import { useMainStore } from '~/app/store'
import { ref } from 'vue'
interface Props {
	id: string
}

const props = defineProps<Props>()
const $store = useMainStore()
const isChecked = ref($store.itemsMap.includes(props.id))

function addToCartItem(id: string) {
	isChecked.value = true
	$store.addItem(id)
}

function removeFromCart(id: string) {
	isChecked.value = false
	$store.removeItem(id)
}
</script>

<style lang="scss">
.add-to-cart {
	position: relative;
	z-index: 1;
	padding: 12px;
	background-color: $color-green;
	color: $color-white;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
}
</style>
