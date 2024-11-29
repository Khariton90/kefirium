<template>
	<div class="app">
		<LayoutHeader>
			<ButtonToCart />
		</LayoutHeader>
		<div class="container">
			<slot />
		</div>
		<LayoutFooter />
	</div>
</template>

<script setup lang="ts">
import { ButtonToCart } from '~/entities/cart'
import { LayoutFooter } from '~/widgets/layout-footer'
import { LayoutHeader } from '~/widgets/layout-header'
</script>
