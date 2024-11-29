import { defineStore } from 'pinia'
import { CategoryName } from '~/entities/category'

export const useMainStore = defineStore('main', {
	state: () => ({
		counter: 0,
		isLoading: false,
		itemsMap: [] as string[],
		filter: CategoryName.Default,
	}),
	actions: {
		addItem(id: string) {
			this.itemsMap.push(id)
		},
		removeItem(id: string) {
			this.itemsMap = this.itemsMap.filter(item => item !== id)
		},
		increment() {
			this.counter++
		},
		decrement() {
			this.counter--
		},
		setIsLoading(value: boolean) {
			this.isLoading = value
		},
		changeCategory(category: CategoryName) {
			this.filter = category
		},
	},
})
