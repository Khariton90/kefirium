<template>
	<aside class="aside">
		<form class="filters">
			<h2 class="filters-title">Фильтры</h2>
			<label :for="item.id" v-for="item of filterList" :key="item.id">
				<input
					type="radio"
					:name="item.name"
					:value="item.value"
					:id="item.id"
					v-model="checked"
					@change="handleChange($event.target.value)"
				/>
				{{ item.value }}
			</label>
		</form>
	</aside>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '~/app/store'
import { CategoryName } from '~/entities/category'

const router = useRouter()
const $store = useMainStore()
const checked = ref($store.filter || CategoryName.Default)

const filterList = reactive([
	{ id: 1, name: 'category', value: CategoryName.Binance },
	{ id: 2, name: 'category', value: CategoryName.Ethereum },
	{ id: 3, name: 'category', value: CategoryName.Flow },
	{ id: 4, name: 'category', value: CategoryName.SmartChain },
	{ id: 5, name: 'category', value: CategoryName.Solana },
	{ id: 6, name: 'category', value: CategoryName.Polygon },
])

function handleChange(value) {
	if (checked.value) {
		$store.changeCategory(value)
		router.push({
			path: '/',
			query: { category: value },
		})
	}
}
</script>

<style lang="scss">
.aside {
	width: 300px;
}

.filters-title {
	line-height: 2rem;
}

.filters {
	@include flex(row, center, center);
	gap: 10px;
	flex-wrap: wrap;
}

@media (min-width: $media-tablet) {
	.filters {
		@include flex(column, flex-start, flex-start);
	}
}
</style>
