<template>
	<li class="nav-item cart-item">
		<NuxtLink class="nav-link cart" to="/checkout">
			<span v-if="count" class="badge">{{ count }}</span>
			<span>Корзина</span>
		</NuxtLink>
	</li>
</template>

<script setup>
import { useMainStore } from '~/app/store'

const $store = useMainStore()
const count = computed(() => $store.itemsMap.length)
</script>

<style lang="scss">
.cart {
	position: relative;
	border: 1px solid $color-white;
	padding: 10px 20px;

	&:hover {
		background-color: $color-white;
		color: $color-base;
	}
}

.badge {
	position: absolute;
	top: -10px;
	right: -10px;
	width: 20px;
	height: 20px;
	background-color: $color-white;
	color: $color-black;
	border-radius: 50%;
	text-align: center;
	border: 1px solid $color-base;
	font-size: 0.8rem;
	@include flex(row, center, center);
	color: $color-base;
}
</style>
